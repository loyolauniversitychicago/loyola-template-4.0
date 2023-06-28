const mainNavigationList = document.querySelectorAll('#site-nav > li');

mainNavigationList.forEach(list => {
  list.setAttribute('role', 'menuitem');
  if (list.querySelector('ul')) {
    const button = document.createElement('button');
    button.classList.add('main-navigation-btn');
    button.setAttribute('role', 'button');
    button.setAttribute('aria-haspopup', 'menu');
    const anchor = list.querySelector('a');
    anchor.parentNode.insertBefore(button, anchor.nextElementSibling);
    const spanCurrentSection = list.querySelector('.currentsection');
  }
})

const mainNavigationBtns = document.querySelectorAll('.main-navigation-btn');

mainNavigationBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!btn.nextElementSibling.classList.contains('show')) {
      mainNavigationClose()
      btn.nextElementSibling.classList.add('show');
    } else {
      btn.nextElementSibling.classList.remove('show');
    }
  })
})

document.addEventListener('click', e => !e.target.classList.contains('main-navigation-btn') ? mainNavigationClose() : null );

document.addEventListener('keyup', e => e.key === 'Escape' ? mainNavigationClose() : null );

const mainNavigationClose = () => mainNavigationBtns.forEach(btn => btn.nextElementSibling.classList.remove('show'));