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
    setLogo('dark'); 
  } else if (darkmode === 'false') {
    icon.classList.add('fa-sun');
    setLogo('light'); 
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
    setLogo('dark');
  } else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    setLogo('light'); 
  }

  setTimeout(() => {
    icon.classList.remove('animated');
  }, 500);
});

function setLogo(mode) {
  if (mode === 'dark') {
    lightLogo.style.display = 'none';
    darkLogo.style.display = 'flex';
  } else {
    lightLogo.style.display = 'flex';
    darkLogo.style.display = 'none';
  }
}

const menu = document.querySelector('.menu');
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');


openMenuButton.addEventListener('click', () => {
  menu.classList.add('opened');
  openMenuButton.style.display = 'none'; 
  closeMenuButton.style.display = 'flex'; 
});


closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('opened');
  closeMenuButton.style.display = 'none'; 
  openMenuButton.style.display = 'flex'; 
});


