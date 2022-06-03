gsap.registerPlugin(ScrollTrigger);

gsap.set('#media-card-wrapper', { yPercent: 5 });
gsap.set('#closer-wrapper', { yPercent: 25 });

function animateFrom(elem, direction) {
  direction = direction | 1;
  var x = 10,
      y = direction * 100;
  if(elem.classList.contains("reveal-100")) {
    x = 10;
    y = 100;
  } else if(elem.classList.contains("reveal-200")) {
    x = 10;
    y = 200;
  } else if(elem.classList.contains("reveal-300")) {
    x = 10;
    y = 300;
  }
  else if(elem.classList.contains("reveal-400")) {
    x = 0;
    y = 400;
  }
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    x: 0,
    y: 0,
    delay: 2,
    duration: 2,
    autoAlpha: 1,
    ease: "power2",
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

const tlHeroForeground = document.querySelector('#parallax-section-one #img-foreground')
const tlHeroBackground = document.querySelector('#parallax-section-one #img-background')

let tlHero = gsap.timeline()
tlHero.to(tlHeroForeground, {y: -50, duration: 2, delay: 0})
tlHero.to(tlHeroBackground, {y: -100, scale: 2, duration: 6, delay: -2})

const tlUniversityLogo = document.querySelector('#parallax-section-one #opener-university-logo')

let tlLogo = gsap.timeline()
tlLogo.to(tlUniversityLogo, {autoAlpha: 1, y: 50, filter: 'blur(0px)', duration: 1, delay: 3})

const tlHeroScroll = document.querySelector('.scroll-down')

let tlScroll = gsap.timeline()
tlScroll.from(tlHeroScroll, {autoAlpha: 1, y: 100, filter: 'blur(0px)', duration: 1, delay: 4.5})


const tlSectionOne = gsap.timeline({
  scrollTrigger: {
    trigger: "#parallax-section-one",
    start: "top top",
    end: "bottom top",
    toggleActions: "play none none none",
    scrub: false,
    pin: true,
    pinSpacing: false,
    markers: false
}})
