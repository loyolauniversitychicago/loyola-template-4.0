gsap.registerPlugin(ScrollTrigger);



// parallax wood *****

//   const parallaxWood = gsap.timeline({
//       ease: 'none',
//       scrollTrigger: {
//         trigger: '.ses-hero',
//         start: 'top top-=40',
//         end: "+=6000px",
//         ease: 'circ.in',
//         scrub: true
//       }
//   })
//   parallaxWood
//     .from('#hero-image-left img.pattern', {duration: 6, y: '30%', opacity: 1})
//     .to('#hero-image-left', {duration: 4, backgroundColor: '#b4af95'}, 0)
//
}

window.addEventListener('load', function(){
    init();
});
