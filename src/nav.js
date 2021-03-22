import { createContact } from './contact'
import { home } from './home'
import {createMenu} from './menu'
 export function createHeader() {
    const container = document.getElementById('content').appendChild(document.createElement('nav'))
    container.classList.add('navbar')
    const homeButton = container.appendChild(document.createElement('button'))
    homeButton.id = home
    homeButton.textContent = 'Home'   
    
    const menuButton = container.appendChild(document.createElement('button'))
    menuButton.classList.add('menu-btn')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click', function dispmenu() {
      createMenu()
    })
    
   
    const contactButton = container.appendChild(document.createElement('button'))
    contactButton.classList.add('contact-btn')
    contactButton.textContent = 'Contact'
    contactButton.addEventListener('click', function dispcontact(){
      createContact()
    })
 
  }
  

    
    

  
