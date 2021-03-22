export function home() {
    const container = document.getElementById('content').appendChild(document.createElement('div'))
    const section = container.appendChild(document.createElement('section'))
    section.classList.add('home-intro')
    const h1 = section.appendChild(document.createElement('h1'))
    h1.textContent = 'Paradise'
    const h2 = section.appendChild(document.createElement('h2'))
    h2.textContent = 'Taste it, Love it!'

    const aboutTitle = section.appendChild(document.createElement('h3'))
    aboutTitle.classList.add('about-title')
    aboutTitle.textContent = 'About'

    const aboutContent = section.appendChild(document.createElement('p'))
    aboutContent.classList.add('about-content')
    aboutContent.textContent = 'We are number one chicken restaurant in town'
    
     
}

  