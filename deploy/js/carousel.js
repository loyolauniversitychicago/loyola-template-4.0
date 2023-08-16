window.addEventListener('load', () => {
    const carousels = document.querySelectorAll('.panel-carousel');
    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.slide');
      const slidesQty = slides.length;
      slides.forEach(slide => {
        const index = parseInt(slide.getAttribute('data-slick-index')) + 1;
        slide.querySelector('.numbertext').innerHTML = `${index} / ${slidesQty}`;
      })
    })
    carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.slide.slick-slide');
      slides.forEach(slide => {
        const caption = slide.querySelector('.caption');
        const image = slide.querySelector('img');
        caption ? image.style.height = `calc(100% - ${caption.clientHeight}px` : null
      })
    })
    // modal fix
    const modalCta = document.querySelectorAll('.modaal.cta');
    if (modalCta) {
      modalCta.forEach(cta => {
        cta.addEventListener('click', e => {
          const modalId = e.currentTarget.href;
          document.getElementById(modalId.substring(modalId.lastIndexOf('#') + 1)) ? $('.slick-slider').slick('refresh') : null
        })
      })
    }
  })