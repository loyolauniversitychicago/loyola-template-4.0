<script>
gsap.registerPlugin(ScrollTrigger);

console.clear();

function animateFrom(elem, direction) {
  direction = direction | 1;
  var x = 0,
        y = direction * 100;
  if(elem.classList.contains("reveal-from-left")) {
    x = -200;
    y = 0;
  } else if(elem.classList.contains("reveal-from-right")) {
    x = 200;
    y = 0;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 2,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {

  gsap.utils.toArray(".hero-reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      // onEnterBack: function() { animateFrom(elem, -1) },
      // onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

//PARALLAX ***

gsap.utils.toArray(".hero-panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

//ANIMATIONS ***

let tl_windowshade_one = gsap.timeline();
tl_windowshade_one.to("#story-intro-windowshade-one", 2, {height:0, delay:2})

let tl_cta_reveal_one = gsap.timeline();
tl_cta_reveal_one.to("#cta-overlay-panel-wrapper-one", 1, {bottom:0, delay: 3})

let tl_windowshade_two = gsap.timeline();
tl_windowshade_two.to("#story-intro-windowshade-two", 2, {height:0, delay:2})

let tl_cta_reveal_two = gsap.timeline();
tl_cta_reveal_two.to("#cta-overlay-panel-wrapper-two", 1, {bottom:0, delay: 3})

let tl_windowshade_three = gsap.timeline();
tl_windowshade_three.to("#story-intro-windowshade-three", 2, {height:0, delay:2})

let tl_cta_reveal_three = gsap.timeline();
tl_cta_reveal_three.to("#cta-overlay-panel-wrapper-three", 1, {bottom:0, delay: 3})

//STORY INTRO MODULE - ONE ***

gsap.to("#story-intro-module-one", {
  scrollTrigger: {
    trigger: "#story-intro-module-one",
    start: "top top",
    ease: "ease",
    end: "100%",
    pin: true
  }
});

//WINDOWSHADE - ONE ***

ScrollTrigger.create({
  trigger: '#story-intro-module-one',
  start: "top top",
  ease: "ease",
  pin: true,
  pinSpacing: true,
  scrub: true,
  animation: tl_windowshade_one,
  toggleActions: "play none none reverse"
});

//CTA-REVEAL - ONE ***

ScrollTrigger.create({
  trigger: '#story-intro-module-one',
  start: "center center",
  ease: "ease",
  pinSpacing: false,
  scrub: true,
  animation: tl_cta_reveal_one,
  toggleActions: "play none none reverse"
});

//STORY INTRO MODULE - TWO ***

gsap.to("#story-intro-module-two", {
  scrollTrigger: {
    trigger: "#story-intro-module-two",
    start: "top top",
    ease: "ease",
    end: "100%",
    pin: true
  }
});

//WINDOWSHADE - TWO ***

ScrollTrigger.create({
  trigger: '#story-intro-module-two',
  start: "top top",
  ease: "ease",
  pin: true,
  pinSpacing: true,
  scrub: true,
  animation: tl_windowshade_two,
  toggleActions: "play none none reverse"
});

//CTA-REVEAL - TWO ***

ScrollTrigger.create({
  trigger: '#story-intro-module-two',
  start: "center center",
  ease: "ease",
  pinSpacing: false,
  scrub: true,
  animation: tl_cta_reveal_two,
  toggleActions: "play none none reverse"
});

//STORY INTRO MODULE - THREE ***

gsap.to("#story-intro-module-three", {
  scrollTrigger: {
    trigger: "#story-intro-module-three",
    start: "top top",
    ease: "ease",
    end: "100%",
    pin: true
  }
});

//WINDOWSHADE - THREE ***

ScrollTrigger.create({
  trigger: '#story-intro-module-three',
  start: "top top",
  ease: "ease",
  pin: true,
  pinSpacing: true,
  scrub: true,
  animation: tl_windowshade_three,
  toggleActions: "play none none reverse"
});

//CTA-REVEAL - THREE ***

ScrollTrigger.create({
  trigger: '#story-intro-module-three',
  start: "center center",
  ease: "ease",
  pinSpacing: false,
  scrub: true,
  animation: tl_cta_reveal_three,
  toggleActions: "play none none reverse"
});

//OUTLINE WORDS ***

gsap.to(".svg-wrapper-reimagine", {
  scrollTrigger: {
    trigger: ".svg-wrapper-reimagine",
    start: "top bottom",
    once: true,
    toggleClass: { targets: '.svg-wrapper-reimagine', className: 'draw-lines' }
  }
});

gsap.to(".svg-wrapper-respond", {
  scrollTrigger: {
    trigger: ".svg-wrapper-respond",
    start: "top bottom",
    once: true,
    toggleClass: { targets: '.svg-wrapper-respond', className: 'draw-lines' }
  }
});

gsap.to(".svg-wrapper-restore", {
  scrollTrigger: {
    trigger: ".svg-wrapper-restore",
    start: "top bottom",
    once: true,
    toggleClass: { targets: '.svg-wrapper-restore', className: 'draw-lines' }
  }
});
</script>
