// const table = document.querySelector('.panel-table table');
// const tableHeader = table.querySelector('thead');
// const lastRow = table.querySelector('tbody tr:last-of-type');
// const secondLastRow = lastRow.previousElementSibling;

// const tableHeaderChildren = Array.from(tableHeader.firstElementChild.children)
// tableHeaderChildren.forEach(th => th.style.width = `${th.offsetWidth}px`);

// const tableHeaderCopy = tableHeader.innerHTML;
// let isHeaderRowAdded = false;

// window.addEventListener('scroll', () => {
//   const mainNavHeight = document.querySelector('#main').clientHeight;
//   const tableRect = tableHeader.getBoundingClientRect();
//   const tableTop = tableRect.top - parseInt(mainNavHeight);
//   const secondLastRow = lastRow.getBoundingClientRect();
//   const secondLastTop = secondLastRow.top - parseInt(mainNavHeight);
//   console.log(secondLastRow.top)

//   if (tableTop < 0 && secondLastRow.top > 150) {
//     if (!isHeaderRowAdded) {
//       tableHeader.firstElementChild.insertAdjacentHTML('afterend', tableHeaderCopy);
//       tableHeader.lastElementChild.classList.add('fixed');
//       tableHeader.lastElementChild.style.top = mainNavHeight + 'px';
//       isHeaderRowAdded = true;
//     }
//   } else {
//     tableHeader.classList.remove('fixed');
//     if (isHeaderRowAdded) {
//       tableHeader.lastElementChild.remove();
//       isHeaderRowAdded = false;
//     }
//   }
// });
