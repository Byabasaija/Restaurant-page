
 export function createHeader() {
    const container = document.getElementById('content').appendChild(document.createElement('nav'))
    container.classList.add('navbar')
    const homeButton = container.appendChild(document.createElement('button'))
    homeButton.classList.add('nav-btn')
    homeButton.textContent = 'Home'
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    }); 

    const menuButton = container.appendChild(document.createElement('button'))
    menuButton.classList.add('nav-btn')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadMenu();
    }); 

    const contactButton = container.appendChild(document.createElement('button'))
    contactButton.classList.add('nav-btn')
    contactButton.textContent = 'Contact'
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    }); 
  }
  
  export function createFooter() {
    const footer = document.getElementById('content').appendChild(document.createElement('footer'));
    footer.classList.add("footer");
  
    const copyright = footer.appendChild(document.createElement('span'));
    copyright.textContent = "Copyright © 2021 paradise";

  }
  
