const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

switcher.addEventListener('change', onChangeColor);

function onChangeColor() {
  const check = switcher.checked;

  if (check) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const localTheme = localStorage.getItem('theme');
if (localTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  switcher.checked = true;
}
