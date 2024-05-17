import './styles/normalize.css';
import './styles/common.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';
import displayHomePage from './home';
import displayMenu from './menu';
import displayContactDetails from './contact';

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const contactButton = document.querySelector('.contact');

// Display homepage as default
displayHomePage();
homeButton.classList.add('selected');

const page = document.querySelector('#content');

// On Home button click, display the homepage content
homeButton.addEventListener('click', () => {
  homeButton.classList.add('selected');
  menuButton.classList.remove('selected');
  contactButton.classList.remove('selected');
  page.innerHTML = '';
  displayHomePage();
});

// On Menu button click, display the menu
menuButton.addEventListener('click', () => {
  menuButton.classList.add('selected');
  homeButton.classList.remove('selected');
  contactButton.classList.remove('selected');
  page.innerHTML = '';
  displayMenu();
});

// On Contact button click, display the contact details
contactButton.addEventListener('click', () => {
  contactButton.classList.add('selected');
  homeButton.classList.remove('selected');
  menuButton.classList.remove('selected');
  page.innerHTML = '';
  displayContactDetails();
});
