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
    darkLogo.style.display = 'flex';
  } else {
    lightLogo.style.display = 'flex';
    darkLogo.style.display = 'none';
  }
}

const menu = document.querySelector('.menu');
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');

// Add a click event listener to the open menu button
openMenuButton.addEventListener('click', () => {
  menu.classList.add('opened'); // Add the "opened" class to show the menu
  openMenuButton.style.display = 'none'; // Hide the open menu button
  closeMenuButton.style.display = 'flex'; // Show the close menu button
});

// Add a click event listener to the close menu button
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('opened'); // Remove the "opened" class to hide the menu
  closeMenuButton.style.display = 'none'; // Hide the close menu button
  openMenuButton.style.display = 'flex'; // Show the open menu button
});