
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".wrapper", {
//   scrollTrigger: {
//     trigger: ".wrapper",
//     start: "top top",
//     end: "top bottom",
//     pin: true,
//     pinSpacing: true,
//     markers: true
//   }
// })

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrapper',
    start: "top top",
    end: "+=100%",
    toggleActions: "restart none none none",
    pin: true,
    pinSpacing: true,
    markers: false
}})

tl.to('#img-overlay', {autoAlpha: 0, duration: 3, delay: 0})
  .to('#img-overlay h1', {autoAlpha: 0, duration: 1, delay: 0})
  .to('#loyola-project-title', {autoAlpha: 1, duration: 4, delay: 5})
  .to("#img-overlay h1", {
    duration: 4,
    yPercent: 200,
    filter: "blur(20px)",
    scale: 2,
    ease: "none"}, "0")
  .to("#loyola-project-title h1", {
    delay: 0,
    duration: 4,
    yPercent:100,
    filter: "blur(0px)",
    scale: 1.125,
    ease: "none"}, "0")
  .to("#img-foreground-one", {
    delay: 0,
    duration: 7,
    xPercent: 4,
    yPercent: 18,
    filter: "blur(0px)",
    scale: 1.125,
    ease: "power4"}, ".25")
  .to("#img-foreground-two", {
    delay: 0,
    duration: 9,
    xPercent: 3.25,
    yPercent: 14.5,
    filter: "blur(0px)",
    scale: 1.125,
    ease: "power4"}, "<0")
  .to("#img-middleground", {
    delay: 0,
    duration: 7,
    xPercent: 3,
    yPercent: 14.5,
    filter: "blur(2px)",
    scale: 1.175,
    ease: "power3"}, "<0")
  .to("#img-background", {
    delay: .5,
    duration: 5,
    scale: 1.25,
    ease: "power3",
    transformOrigin:'center top'}, "0")
  ;
