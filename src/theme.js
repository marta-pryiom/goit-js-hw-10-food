const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

let currentTheme = null;

switcher.addEventListener('change', changeTheme);

function changeTheme() {
  localStorage.getItem('theme') ? onThemeChange() : Theme.LIGHT;
}
function onThemeChange() {
  if (switcher.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
    currentTheme = localStorage.getItem('theme');
    console.log(currentTheme);
  }
}

//не працює
// function changeTheme(e) {
//   e.currentTarget.checked ? onDarkThemeChange() : onLightThemeChange();
// }
// function onLightThemeChange() {
//   body.classList.add(Theme.LIGHT);
//   body.classList.remove(Theme.DARK);
//   localStorage.removeItem('theme');
//   localStorage.setItem('theme', Theme.LIGHT);
//   currentTheme = localStorage.getItem('theme');
//   console.log(currentTheme);
// }

// switcher.addEventListener('change', onDarkThemeChange);
// function onDarkThemeChange() {
//   body.classList.add(Theme.DARK);
//   body.classList.remove(Theme.LIGHT);
//   localStorage.setItem('theme', Theme.DARK);
//   currentTheme = localStorage.getItem('theme');
//   console.log(currentTheme);
// }

// switcher.addEventListener('change', checkColor);
// switcher.addEventListener('change', inLocaLeStorage);

// function checkColor() {
//   const check = switcher.checked;

//   if (check) {
//     body.classList.add(Theme.DARK);
//     body.classList.remove(Theme.LIGHT);
//   } else {
//     body.classList.add(Theme.LIGHT);
//     body.classList.remove(Theme.DARK);
//   }
// }

// не працює
// function inLocaLeStorage() {
//   const check = switcher.checked;

//   if (check) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// const changeLocalTheme = localStorage.getItem('theme');
// if (changeLocalTheme === Theme.DARK) {
//   body.classList.add(Theme.DARK);
//   switcher.checked = true;
// }
