export function intro() {
    const container = document.getElementById('content').appendChild(document.createElement('div'))
    container.classList.add('nav-content')
    const section = container.appendChild(document.createElement('section'))
    section.classList.add('intro')
    const h1 = section.appendChild(document.createElement('h1'))
    h1.innerHTML = 'Paradise'
    const h2 = section.appendChild(document.createElement('h2'))
    h2.innerHTML = 'Taste it, Love it!'
}

export function foodSection() {
    const container = document.getElementsByClassName('nav-content')[0]
    const section = container.appendChild(document.createElement('div'))
    section.classList.add('foods')
    const fooddiv1 = section.appendChild(document.createElement("div"))
    const food1 = fooddiv1.appendChild(document.createElement('h3'))
    food1.innerHTML = "Coffee"
    const food1Image = fooddiv1.appendChild(document.createElement('img'))
    food1Image.src = "./assets/img/img2.jpg"
    const fooddiv2 =section.appendChild(document.createElement('div'))
    const food2 = fooddiv2.appendChild(document.createElement('h3'))
    food2.innerHTML = "Grill"
    const food2Image = fooddiv2.appendChild(document.createElement('img'))
    food2Image.src = "./assets/img/img3.jpg"
    const fooddiv3 =section.appendChild(document.createElement('div'))
    const food3 = fooddiv3.appendChild(document.createElement('h3'))
    food3.innerHTML = "Grill"
    const food3Image = fooddiv3.appendChild(document.createElement('img'))
    food3Image.src = "./assets/img/img3.jpg"
    const fooddiv4 =section.appendChild(document.createElement('div'))
    const food4 = fooddiv4.appendChild(document.createElement('h3'))
    food4.innerHTML = "Grill"
    const food4Image = fooddiv4.appendChild(document.createElement('img'))
    food4Image.src = "./assets/img/img3.jpg"
  }
  