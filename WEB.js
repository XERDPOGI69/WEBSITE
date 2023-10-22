const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');
const lightLogo = document.getElementById('logo-light');
const darkLogo = document.getElementById('logo-dark');

function store(value) {
  localStorage.setItem('darkmode', value);
}

function load() {
  const darkmode = localStorage.getItem('darkmode');

  if (!darkmode) {
    store(false);
    icon.classList.add('fa-sun');
  } else if (darkmode === 'true') {
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
    setLogo('dark'); // Set the dark logo when dark mode is active
  } else if (darkmode === 'false') {
    icon.classList.add('fa-sun');
    setLogo('light'); // Set the light logo when dark mode is not active
  }
}

load();

btn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  icon.classList.add('animated');
  store(body.classList.contains('darkmode'));

  if (body.classList.contains('darkmode')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    setLogo('dark'); // Set the dark logo when dark mode is activated
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    setLogo('light'); // Set the light logo when dark mode is not active
  }

  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});

function setLogo(mode) {
  if (mode === 'dark') {
    lightLogo.style.display = 'none';
    darkLogo.style.display = 'block';
  } else {
    lightLogo.style.display = 'block';
    darkLogo.style.display = 'none';
  }
}
