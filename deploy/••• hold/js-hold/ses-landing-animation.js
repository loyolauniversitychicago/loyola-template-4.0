gsap.registerPlugin(ScrollTrigger);

gsap.to('#hero-background-images', {
    scrollTrigger: {
    opacity: 0,
    trigger: '#hero-image-left',
    pin: true,
    pinSpacing: false,
    start: 'top+=10 top+=10',
    end: 'bottom bottom-=6550',
    toggleActions: 'none none none none',
    markers:true,
    id: 'background-images'
    },
});

gsap.to('#hero-background-images', {
    scrollTrigger: {
    opacity: 0,
    trigger: '#hero-image-right',
    pin: true,
    pinSpacing: false,
    start: 'top+=10 top+=10',
    end: 'bottom bottom-=6500',
    toggleActions: 'none none none none',
    markers:true,
    id: 'background-images'
    },
});

// hero center *****

gsap.set('.hero-center', {xPercent:0, yPercent:0})

// a loop - .hero *****
var sections = gsap.utils.toArray(".hero").forEach(function(elem) {

// select the relevant elements
  var center = elem.querySelectorAll("img.center");
  var right = elem.querySelectorAll("img.right");
  var word = elem.querySelectorAll("h2");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      pin: elem,
      ease: 'circ',
      scrub: 1,
      start: "top top",
      end: '+=1000',
      toggleActions: 'play none none none',
    },
  })
  .from(center, {y: 100, opacity:0, duration:5, ease:'none'}, "0")
  .from(right, {y: 150, opacity:0, duration:5, ease:'none'}, "+=1")
  .from(word, {y: 150, opacity:0, duration:5, ease:'none'}, "+=.5")
  .from({}, {duration: 20}) // a little pause at the end
});


gsap.from('.image-one',{
  scrollTrigger: {
    trigger: '.speaker-panel-one',
    start: 'top bottom',
    markers: true,
  },
  opacity: 0,
  duration: 2,
  x: 100
});

gsap.from('.image-two',{
  scrollTrigger: {
    trigger: '.speaker-panel-two',
    start: 'top bottom',
    markers: true,
  },
  opacity: 0,
  duration: 2,
  x: 100
});

gsap.from('.image-three',{
  scrollTrigger: {
    trigger: '.speaker-panel-three',
    start: 'top bottom',
    markers: true,
  },
  opacity: 0,
  duration: 2,
  x: 100
});

gsap.from('.image-four',{
  scrollTrigger: {
    trigger: '.speaker-panel-four',
    start: 'top bottom',
    markers: true,
  },
  opacity: 0,
  duration: 2,
  x: 100
});

// hero intro *****

function init(){

const introHero = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero-intro',
      start: 'top top',
      scrub: true
    }
})
introHero
  .from('#intro-box', {duration: .25, y: '100px', autoAlpha: 1})

// speakers *****

const speakers = document.querySelectorAll('.speaker-panel-content')

speakers.forEach((speaker) => {

  gsap.from(speaker, {
    opacity: 0,
    duration: 1,
    yPercent: 15,
    scrollTrigger: {
      trigger: speaker.querySelector('.speaker-icon'),
      start: 'top bottom',
      toggleActions: 'play none none none',
      markers: true
    }
  })
  gsap.from(speaker.querySelector('.speaker-image'), {
    opacity: 0,
    duration: 0.75,
    y: 50,
    delay: 0.25,
    scrollTrigger: {
      trigger: speaker.querySelector('.speaker-icon'),
      start: 'top bottom'
    }
  })
  gsap.from(speaker.querySelector('h4'), {
    opacity: 0,
    duration: 0.75,
    ease: 'none',
    y: 50,
    delay: 0.5,
    scrollTrigger: {
      trigger: speaker.querySelector('.speaker-icon'),
      start: 'top bottom'
    }
  })
  gsap.from(speaker.querySelector('h5'), {
    opacity: 0,
    duration: 0.75,
    ease: 'none',
    y: 60,
    delay: 0.5,
    scrollTrigger: {
      trigger: speaker.querySelector('.speaker-icon'),
      start: 'top bottom'
    }
  })
  gsap.from(speaker.querySelector('bio-wrapper'), {
    opacity: 0,
    duration: 2,
    ease: 'none',
    y: 0,
    delay: 0.75,
    scrollTrigger: {
      trigger: speaker.querySelector('.speaker-icon'),
      start: 'top bottom'
    }
  })

});

// parallax speaker background left *****

  const parallaxSpeakerBG = gsap.timeline({
      scrollTrigger: {
        trigger: '#speaker-bg-image-left',
        pin: true,
        start: 'top top+=100vh',
        end: '+=2500vh',
        ease: 'circ.in',
        scrub: true
      }
  })
  parallaxSpeakerBG
    .to('#speaker-bg-image-left', {duration: 6, opacity: 1})

// parallax wood *****

  const parallaxWood = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: '.ses-hero',
        start: 'top top-=40',
        end: "+=6000px",
        ease: 'circ.in',
        scrub: true
      }
  })
  parallaxWood
    .from('#hero-image-left img.pattern', {duration: 6, y: '30%', opacity: 1})
    .to('#hero-image-left', {duration: 4, backgroundColor: '#b4af95'}, 0)

// parallax stories *****

    const parallaxStories = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
          trigger: '.ses-stories',
          start: 'top bottom',
          scrub: true
        }
    })
    parallaxStories
      .from('.background-parallax', {duration: 2, y: '40%', autoAlpha: .85})

}
// closes functions *****

window.addEventListener('load', function(){
    init();
});

// opener *****

window.onload = function() {
var timeline = new TimelineMax({delay:1, repeat:0});
timeline.from('#one', 1, {x:-50, autoAlpha:0})
  .from('#two', 1, {x:50, autoAlpha:0}, .5)
  .from('#bar', .5, {height:0, autoAlpha:0}, 2)
  .from('#three', 1, {y:30, autoAlpha:0}, 2)
};
