gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
//   });
// });

gsap.set('#parallax-section-four', { yPercent: 100 });
gsap.set('#parallax-section-four', { yPercent: 100 });
gsap.set('#scroll-sections', { yPercent: 0 });
gsap.set('#media-card-wrapper', { yPercent: 5 });
gsap.set('#closer-wrapper', { yPercent: 25 });

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

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
tlHero.to(tlHeroForeground, {y: -20, filter: 'blur(0px)', duration: 2, delay: 0})
tlHero.to(tlHeroBackground, {y: -150, scale: 2, duration: 6, delay: -2})

const tlUniversityLogo = document.querySelector('#parallax-section-one #opener-university-logo')

let tlLogo = gsap.timeline()
tlLogo.to(tlUniversityLogo, {autoAlpha: 1, y: 50, filter: 'blur(0px)', duration: 1, delay: 3})

const tlHeroScroll = document.querySelector('.scroll-down')

let tlScroll = gsap.timeline()
tlScroll.from(tlHeroScroll, {autoAlpha: 1, y: 100, filter: 'blur(0px)', duration: 1, delay: 4.5})

const tlSectionTwo = gsap.timeline({
  scrollTrigger: {
    trigger: "#parallax-section-two",
    start: "top bottom",
    end: "bottom center",
    toggleActions: "restart none none none",
    scrub: false,
    pin: "top top",
    pinSpacing: false,
    markers: false
}})

tlSectionTwo
  .to("#parallax-section-two #img-background", {
    delay: .5,
    duration: 5,
    scale: 1.125,
    ease: "power3",
    transformOrigin:'center top'}, "0")
  ;

const tlSectionThree = gsap.timeline({
  scrollTrigger: {
    trigger: '#parallax-section-three',
    start: "top center",
    toggleActions: "play none none none",
    scrub: false,
    pin: "top top",
    pinSpacing: false,
    markers: false},
});

tlSectionThree
  .from('#masonry-image-overlay', {autoAlpha: 1, delay: 0})
  .from('#parallax-section-three .animation-text-wrapper', {autoAlpha: 0, delay: 0})
  .from('#parallax-section-three .animation-text-wrapper #message-line-one', {autoAlpha: 0, y: 20, ease: "sine", delay: 0})
  .from('#parallax-section-three .animation-text-wrapper #message-line-two', {autoAlpha: 0, y: 40, ease: "sine", delay: 0})
  .from('#parallax-section-three .animation-text-wrapper #message-line-three', {autoAlpha: 0, y: 60, ease: "sine", delay: 0})
  .from('#parallax-section-three .animation-text-wrapper #message-line-four', {autoAlpha: 0, y: 60, ease: "sine", duration: 2, delay: 1})
;

const tlSectionFour = gsap.timeline({
  scrollTrigger: {
    trigger: '#parallax-section-four',
    start: "top bottom",
    end: "+=100%",
    toggleActions: "play none none none",
    scrub: false,
    pin: "top top",
    pinSpacing: true,
    markers: false
}})

tlSectionFour
  .from('#parallax-section-four .animation-text-wrapper', {autoAlpha: 0, delay: 0})
  .from('#parallax-section-four .animation-text-wrapper #message-line-one', {autoAlpha: 0, y: 20, delay: 0})
  .from('#parallax-section-four .animation-text-wrapper #message-line-two', {autoAlpha: 0, y: 40, delay: .25})
  .from('#parallax-section-four .animation-text-wrapper #message-line-three', {autoAlpha: 0, y: 60, delay: .25})
;

gsap.to("#svg-line-drawing", {
  scrollTrigger: {
    trigger: "#svg-line-drawing",
    start: "top bottom",
    end: "+=200%",
    scrub: false,
    toggleActions: "restart pause resume none",
    pin: false,
    pinSpacing: true,
    toggleClass: { targets: '#svg-line-drawing', className: 'draw-lines' }
  }
})

gsap.to("#virusOne", {
  scrollTrigger: {
    trigger: "#parallax-section-four",
    start: "top bottom",
    end: "+=200%",
    scrub: false,
    toggleActions: "play none none none",
    pin: false,
    pinSpacing: true,
    toggleClass: { targets: '#virusOne', className: 'activate-animation' }
  }
})

gsap.to("#virusTwo", {
  scrollTrigger: {
    trigger: "#parallax-section-four",
    start: "top bottom",
    end: "+=200%",
    scrub: false,
    toggleActions: "play none none none",
    pin: false,
    pinSpacing: true,
    toggleClass: { targets: '#virusTwo', className: 'activate-animation' }
  }
})

const tlMediaCardWrapperOne = gsap.timeline({
  scrollTrigger: {
    trigger: '#media-card-wrapper .grid-item:nth-child(1)',
    start: "top bottom",
    toggleActions: "play play reverse reset",
    scrub: false,
    pin: false,
    pinSpacing: true
}})
tlMediaCardWrapperOne
  .from('#media-card-wrapper .grid-item:nth-child(1)', {autoAlpha: 0, y: 100, duration: 1, delay: 0})
;

const tlMediaCardWrapperTwo = gsap.timeline({
  scrollTrigger: {
    trigger: '#media-card-wrapper .grid-item:nth-child(2)',
    start: "top bottom",
    end: "bottom +=0%",
    toggleActions: "play play reverse reset",
    scrub: false,
    pin: false,
    pinSpacing: false
}})
tlMediaCardWrapperTwo
  .from('#media-card-wrapper .grid-item:nth-child(2)', {autoAlpha: 0, y: 100, duration: 1, delay: 0})
;

const tlMediaCardWrapperThree = gsap.timeline({
  scrollTrigger: {
    trigger: '#media-card-wrapper .grid-item:nth-child(3)',
    start: "top bottom",
    end: "bottom +=0%",
    toggleActions: "play play reverse reset",
    scrub: false,
    pin: false,
    pinSpacing: false
}})
tlMediaCardWrapperThree
  .from('#media-card-wrapper .grid-item:nth-child(3)', {autoAlpha: 0, y: 100, duration: 1, delay: 0})
;

const tlMediaCardWrapperFour = gsap.timeline({
  scrollTrigger: {
    trigger: '#media-card-wrapper .grid-item:nth-child(4)',
    start: "top bottom",
    end: "bottom +=100%",
    toggleActions: "play play reverse reset",
    scrub: false,
    pin: false,
    pinSpacing: false
}})
tlMediaCardWrapperFour
  .from('#media-card-wrapper .grid-item:nth-child(4)', {autoAlpha: 0, y: 100, duration: 1, delay: 0})
;

const tlSchoolLogo = gsap.timeline({
  scrollTrigger: {
    trigger: '#closer-school-logo',
    start: "top bottom",
    end: "bottom +=100%",
    toggleActions: "play play reverse reset",
    scrub: false,
    pin: false,
    pinSpacing: false
}})
tlSchoolLogo
  .from('#closer-school-logo', {autoAlpha: 0, y: 100, duration: 1, delay: 0})
;
