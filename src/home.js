export function intro() {
    const container = document.getElementById('content').appendChild(document.createElement('div'))
    container.classList.add('home-content')
    const section = container.appendChild(document.createElement('section'))
    section.classList.add('intro')
    const h1 = section.appendChild(document.createElement('h1'))
    h1.innerHTML = 'Paradise'
    const h2 = section.appendChild(document.createElement('h2'))
    h2.innerHTML = 'Taste it, Love it!'
}

  