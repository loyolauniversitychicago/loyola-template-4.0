const secondaryNavigation = document.querySelectorAll('.t4-navigation-list li');

const addListHeading = el => {
  const heading = document.createElement('li');
  heading.classList.add('heading');
  heading.innerHTML = `<span>${el.getAttribute('data-level')}</span>`
  el.insertAdjacentElement('afterbegin', heading);
}

if (secondaryNavigation.length > 0) {
  secondaryNavigation.forEach(li => {
    if (li.querySelector('ul')) {
      const anchor = li.querySelector('a');
      const dataLevel = li.firstElementChild.innerHTML;
      const dataPrevLevel = li.parentElement.getAttribute('data-level');
      li.lastElementChild.setAttribute('data-level', dataLevel);

      const button = document.createElement('button');
      button.classList.add('t4-navigation-list-btn');
      button.setAttribute('role', 'button');
      button.setAttribute('aria-haspopup', 'menu');
      button.setAttribute('btn-content', dataPrevLevel);
      button.innerHTML = `<i class="fa fa-chevron-right"></i>`;
      anchor.parentNode.insertBefore(button, anchor.nextElementSibling);

      const heading = document.createElement('li');
      heading.classList.add('heading');
      heading.innerHTML = `<span>${dataLevel}</span>`
      li.lastElementChild.insertAdjacentElement('afterbegin', heading);
  
    }
  })
  
  const secondaryNavigationToggleBtn = document.querySelector('.t4-navigation-toggle-btn');
  
  window.innerWidth > 1023 ? secondaryNavigationToggleBtn.nextElementSibling.setAttribute('aria-hidden', false) : null
  
  const toggleSecondaryNavigation = () => {
    secondaryNavigationToggleBtn.classList.toggle('show');
    secondaryNavigationToggleBtn.nextElementSibling.getAttribute('aria-hidden') === 'true' ? secondaryNavigationToggleBtn.nextElementSibling.setAttribute('aria-hidden', false) : secondaryNavigationToggleBtn.nextElementSibling.setAttribute('aria-hidden', true)
  }
  
  secondaryNavigationToggleBtn.addEventListener('click', toggleSecondaryNavigation);
  
  const secondaryNavigationLists = document.querySelectorAll('.t4-navigation-list li > ul');
  const secondaryNavigationCurrent = document.querySelector('.t4-navigation-list li .currentsection');
  
  const navigationBtns = document.querySelectorAll('.t4-navigation-list-btn');
  navigationBtns.forEach(btn => {
  
    const nestedList = btn.parentElement.lastElementChild;
    btn.setAttribute('data-parent', nestedList.getAttribute('class'))
  
    btn.addEventListener('click', e => {
      let dataParent = '';
      e.target.getAttribute('data-parent') ? dataParent = e.target.getAttribute('data-parent') : dataParent = e.target.parentElement.getAttribute('data-parent')
  
      if (!btn.classList.contains('show')) {
        btn.parentElement.firstElementChild.classList.add('hide');
        btn.classList.add('show');
        btn.parentElement.lastElementChild.classList.add('show');
        menuToggleHandler(btn.parentElement.parentElement.classList[0], true)
        btn.parentElement.classList.remove('hide');
      } else {
        btn.parentElement.firstElementChild.classList.remove('hide');
        btn.classList.remove('show');
        btn.parentElement.lastElementChild.classList.remove('show');
        menuToggleHandler(btn.parentElement.parentElement.classList[0], false)
      }
  
    })
  })
  
  if (secondaryNavigationCurrent) {
    secondaryNavigationCurrent.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.stopPropagation();
        secondaryNavigationCurrent.nextElementSibling.classList.toggle('show');
      }
    })
  }
  
  const menuToggleHandler = (classValue, state) => {
    const element = document.querySelectorAll(`.${classValue} > li`);
    switch (classValue) {
      case 't4-navigation-list':
        state ? element.forEach(li => li.classList.add('hide')) : element.forEach(li => li.classList.remove('hide'));
        break;
      case 'multilevel-linkul-0':
        state ? element.forEach(li => li.classList.add('hide')) : element.forEach(li => li.classList.remove('hide'))
        menuToggleBtn(state, '0');
        break;
      case 'multilevel-linkul-1':
        state ? element.forEach(li => li.classList.add('hide')) : element.forEach(li => li.classList.remove('hide'))
        menuToggleBtn(state, '1');
        break;
      case 'multilevel-linkul-2':
        state ? element.forEach(li => li.classList.add('hide')) : element.forEach(li => li.classList.remove('hide'))
        menuToggleBtn(state, '2');
        break;
    }
  }
  
  const menuToggleBtn = (state, i) => {
    const element = document.querySelector(`button.show[data-parent="multilevel-linkul-${i}"]`);
    state ? element.classList.add('hidden') : element.classList.remove('hidden')
  }

  const navigationWrapper = document.querySelector('.intro-grid-area-aside-navigation');
  const lable = document.querySelector('.content-intro h6');
  lable ? navigationWrapper.style.marginTop = lable.clientHeight + 14 + 'px' : null
}
