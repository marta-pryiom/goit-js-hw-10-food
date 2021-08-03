import menuList from './menu.json';
import template from './templates/cardsTemplate.hbs';

const ulList = document.querySelector('.js-menu');
ulList.insertAdjacentHTML('beforeend', template(menuList));

// function menuCreate(menuList) {
//   return menuList.map(template).join('');
// }

// ulList.insertAdjacentHTML('beforeend', menuCreate(menuList));
