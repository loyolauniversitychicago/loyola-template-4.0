(() => {
  // Respect user perference
  const isReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Helper to apply inline CSS
  const setStyleProps = ($el, styles) => {
    for (const [key, value] of Object.entries(styles)) {
      if (value === false) {
        $el.style.removeProperty(key);
      } else {
        $el.style.setProperty(key, value);
      }
    }
  };

  const $nav = document.querySelector('.multi-level-sliding-navigation');
  const $navbody = $nav.querySelector('.multi-level-sliding-navigation-body');
  const $navmain = $nav.querySelector('.multi-level-sliding-navigation-main');
  const $toggles = new Set([
    ...document.querySelectorAll('[href="#nav"]'),
    ...document.querySelectorAll('[aria-controls="nav"]')
  ]);

  // Element to focus when nav is opened
  const $firstfocus = $nav.querySelector('[aria-controls="nav"]');
  // Element to return focus when nav is closed
  let $returnfocus;

  // True or false based on nav state
  let isNavOpen;
  let isNavAnimating;

  // Setup ARIA attributes and hide elements
  const resetNav = () => {
    $nav.setAttribute('aria-hidden', 'true');
    $navmain.querySelectorAll('.multi-level-sliding-navigation-menu').forEach(($list, i) => {
      $list.setAttribute('aria-hidden', String(i !== 0));
      $navmain
        .querySelectorAll('[aria-controls="${$list.id}"]')
        .forEach(($el) => $el.setAttribute('aria-expanded', String(i === 0)));
    });
    $navmain.scrollLeft = 0;
    isNavAnimating = false;
    isNavOpen = false;
  };

  // Initial setup
  resetNav();

  // Capture focus when nav is open
  document.body.addEventListener(
    'focus',
    (ev) => {
      if (isNavOpen && !ev.target.closest('.multi-level-sliding-navigation')) {
        $firstfocus.focus();
      }
    },
    {capture: true}
  );

  // Close nav with escape key
  document.addEventListener('keydown', (ev) => {
    if (isNavOpen && /^Esc(ape)?$/.test(ev.key)) {
      closeNav();
    }
  });

  // Close nav when clicking outside
  $nav.addEventListener('click', (ev) => {
    if (isNavOpen && ev.target === $nav) {
      closeNav();
    }
  });

  // Open or close nav using [aria-controls] toggles
  $toggles.forEach(($toggle) => {
    $toggle.setAttribute('aria-controls', 'nav');
    const handle = (ev) => {
      ev.preventDefault();
      if (!isNavAnimating) {
        isNavOpen ? closeNav() : openNav();
      }
    };
    $toggle.addEventListener('click', handle);
    if ($toggle.hasAttribute('href')) {
      $toggle.addEventListener('keydown', (ev) => {
        if (ev.key === ' ') {
          handle(ev);
        }
      });
    }
  });

  const openNav = () => {
    isNavOpen = true;
    $returnfocus = document.activeElement;
    window.requestAnimationFrame(() => {
      $toggles.forEach(($toggle) => {
        $toggle.setAttribute('aria-expanded', 'true');
      });
      setStyleProps(document.body, {overflow: 'hidden'});
      setStyleProps($page, {'pointer-events': 'none'});
      $nav.setAttribute('aria-hidden', 'false');
      $firstfocus.focus();
      if (!isReducedMotion) {
        isNavAnimating = true;
        animateNavIn();
        setTimeout(() => {
          isNavAnimating = false;
        }, animateDuration);
      }
    });
  };

  const closeNav = () => {
    isNavOpen = false;
    window.requestAnimationFrame(() => {
      $toggles.forEach(($toggle) => {
        $toggle.setAttribute('aria-expanded', 'false');
      });
      $nav.setAttribute('aria-hidden', 'true');
      setStyleProps(document.body, {overflow: false});
      setStyleProps($page, {'pointer-events': false});
      $returnfocus.focus();
      if (isReducedMotion) {
        resetNav();
      } else {
        isNavAnimating = true;
        animateNavOut();
        setTimeout(resetNav, animateDuration);
      }
    });
  };

  // Handle sub-menu scrolling
  let isScroll = false;
  let onScrollTimeout;
  let onScrollEnd = [];

  const onScroll = () => {
    isScroll = true;
    clearTimeout(onScrollTimeout);
    onScrollTimeout = setTimeout(() => {
      $navmain.removeEventListener('scroll', onScroll, {passive: true});
      onScrollEnd.map((fn) => fn());
      onScrollEnd = [];
      isScroll = false;
    }, 50);
  };

  const onSubMenu = ($link, $from, $to) => {
    const isBack = $from.compareDocumentPosition($to) === 2;

    $to.setAttribute('aria-hidden', 'false');
    $navmain
      .querySelectorAll('[aria-controls="${$from.id}"]')
      .forEach(($el) => $el.setAttribute('aria-expanded', 'false'));
    $navmain
      .querySelectorAll('[aria-controls="${$to.id}"]')
      .forEach(($el) => $el.setAttribute('aria-expanded', 'true'));

    // Enable parallax effect
    if (!isReducedMotion) {
      setStyleProps(isBack ? $to : $from, {position: 'sticky'});
    }

    // Fix scroll starting position (Firefox)
    $from.scrollIntoView({inline: 'start'});

    // Callback after transition
    onScrollEnd.push(() => {
      $from.setAttribute('aria-hidden', 'true');
      $from.removeAttribute('style');
      $to.removeAttribute('style');
      $to.querySelector('[href]').focus();
    });

    // Scroll menu into view
    $navmain.addEventListener('scroll', onScroll, {passive: true});
    const left = isBack ? 0 : $to.offsetLeft;
    const behavior = isReducedMotion ? 'auto' : 'smooth';
    $navmain.scrollTo({left, behavior});
  };

  // Activate sub-menu links
  $navmain.querySelectorAll('.multi-level-sliding-navigation [href][aria-controls]').forEach(($link) => {
    const $from = $link.closest('.multi-level-sliding-navigation-menu');
    const $to = $nav.querySelector(new URL($link.href).hash);
    $link.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (!isScroll) {
        window.requestAnimationFrame(() => onSubMenu($link, $from, $to));
      }
    });
  });

  const tX = () => (document.dir === 'rtl' ? '-100%' : '100%');

  const animateDuration = 100;

  const animateNavIn = () => {
    setStyleProps($nav, {
      'pointer-events': 'none',
      'background-color': 'transparent',
      'will-change': 'background-color'
    });
    setStyleProps($navbody, {
      opacity: '0',
      transform: 'translateX(${tX()})',
      'will-change': 'opacity, transform'
    });
    window.requestAnimationFrame(() => {
      setStyleProps($nav, {
        transition: 'background-color ${animateDuration}ms',
        'background-color': false
      });
      setStyleProps($navbody, {
        transition: 'opacity ${animateDuration}ms, transform ${animateDuration}ms',
        transform: 'translateZ(0)',
        opacity: 1
      });
      setTimeout(() => {
        $nav.removeAttribute('style');
        $navbody.removeAttribute('style');
      }, animateDuration);
    });
  };

  const animateNavOut = () => {
    setStyleProps($nav, {
      display: 'flex',
      'pointer-events': 'none',
      'will-change': 'background-color'
    });
    setStyleProps($navbody, {
      opacity: 1,
      transform: 'translateZ(0)',
      'will-change': 'opacity, transform'
    });
    window.requestAnimationFrame(() => {
      setStyleProps($nav, {
        transition: 'background-color ${animateDuration}ms',
        'background-color': 'transparent'
      });
      setStyleProps($navbody, {
        transition: 'opacity ${animateDuration}ms, transform ${animateDuration}ms',
        transform: 'translateX(${tX()})',
        opacity: 0
      });
      setTimeout(() => {
        $nav.removeAttribute('style');
        $navbody.removeAttribute('style');
      }, animateDuration);
    });
  };

  // Sticky header
  const $top = document.querySelector('.Top');
  const $header = document.querySelector('.Header--sticky');

  if ($header) {
    let observeFrame;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (observeFrame) {
            window.cancelAnimationFrame(observeFrame);
          }
          observeFrame = window.requestAnimationFrame(() => {
            setStyleProps($header, {
              '--header-opacity': 1 - entry.intersectionRatio
            });
          });
        });
      },
      {threshold: [...Array(101).keys()].map((x) => x / 100)}
    );
    observer.observe($top);

    let wScrollFrame;
    let wScrollOffset = $top.offsetHeight;
    let wScrollY = window.scrollY;

    const onWindowScrollQueue = [
      () => {
        const scrollY = window.scrollY;
        if (scrollY > wScrollOffset) {
          $header.style.setProperty(
            '--header-visible',
            scrollY > wScrollY ? 0 : 1
          );
        }
        wScrollY = scrollY;
      }
    ];

    window.addEventListener(
      'scroll',
      () => {
        if (wScrollFrame) {
          window.cancelAnimationFrame(wScrollFrame);
        }
        wScrollFrame = window.requestAnimationFrame(() =>
          onWindowScrollQueue.forEach((fn) => fn())
        );
      },
      {passive: true}
    );
  }

  // Optional polyfill for Safari 14
  if (!isReducedMotion && !window.CSS.supports('scroll-behavior: smooth')) {
    import('https://cdn.skypack.dev/smoothscroll-polyfill').then((module) => {
      module.polyfill();
    });
  }

  // Optional polyfill for Safari 14
  if (!window.CSS.supports('selector(:focus-visible)')) {
    import('https://cdn.skypack.dev/focus-visible').then(() => {
      window.applyFocusVisiblePolyfill();
    });
  }
})();

(() => {
  // Toggle right-to-left for demo purposes
  document.querySelector('#toggle-rtl').addEventListener('change', (ev) => {
    document.dir = ev.target.checked ? 'rtl' : 'ltr';
  });
})();
