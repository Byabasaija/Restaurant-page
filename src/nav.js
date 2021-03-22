import { createContact } from './contact'
import { home } from './home'
import {createMenu} from './menu'
 export function createHeader() {
    const container = document.getElementById('content').appendChild(document.createElement('nav'))
    container.classList.add('navbar')
    const homeButton = container.appendChild(document.createElement('button'))
    homeButton.classList.add('home-btn')
    homeButton.textContent = 'Home'
    document.getElementsByClassName('home-btn').addEventListener('click', home() )
    
    const menuButton = container.appendChild(document.createElement('button'))
    menuButton.classList.add('menu-btn')
    menuButton.textContent = 'Menu'
    document.getElementsByClassName('home-btn').addEventListener('click', createMenu() )
   
    const contactButton = container.appendChild(document.createElement('button'))
    contactButton.classList.add('contact-btn')
    contactButton.textContent = 'Contact'
    document.getElementsByClassName('contact-btn').addEventListener('click', createContact() )
 
  }
  
  export function createFooter() {
    const footer = document.getElementById('content').appendChild(document.createElement('footer'));
    footer.classList.add("footer");
  
    const copyright = footer.appendChild(document.createElement('span'));
    copyright.textContent = "Copyright © 2021 paradise";

  }

  
