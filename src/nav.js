import createContact from './contact';
import createMenu from './menu';

function createHeader() {
  const container = document.getElementById('content').appendChild(document.createElement('nav'));
  container.classList.add('navbar');
  const homeButton = container.appendChild(document.createElement('button'));
  homeButton.classList.add('nav-btn');
  homeButton.textContent = 'Home';

  const menuButton = container.appendChild(document.createElement('button'));
  menuButton.classList.add('nav-btn');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    createMenu();
  });


  const contactButton = container.appendChild(document.createElement('button'));
  contactButton.classList.add('nav-btn');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', () => {
    createContact();
  });
}

export default createHeader;