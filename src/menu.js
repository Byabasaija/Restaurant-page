    function createMenu() {
        const container = document.getElementById('content').appendChild(document.createElement('div'))
        const menusection = container.appendChild(document.createElement('div'))
        const titlediv = menusection.appendChild(document.createElement("div"))
        titlediv.classList.add('title')
        const title = titlediv.appendChild(document.createElement('h2'))
        title.innerHTML = "Menu"
        
        const fooddiv = menusection.appendChild(document.createElement('div'))
        fooddiv.classList.add('menu')
        const food1div = fooddiv.appendChild(document.createElement('div'))
        const food1img = food1div.appendChild(document.createElement('img'))
        food1img.src = 'assets/img/img5.jpg'
        const food1 = food1div.appendChild(document.createElement('h3'))
        food1.innerHTML = "Grill"
        
        const food2div = fooddiv.appendChild(document.createElement('div'))
        const food2img = food2div.appendChild(document.createElement('img'))
        food2img.src = 'assets/img/img5.jpg'
        const food2 = food2div.appendChild(document.createElement('h3'))
        food2.innerHTML = "Grill"

        const food3div = fooddiv.appendChild(document.createElement('div'))
        const food3img = food3div.appendChild(document.createElement('img'))
        food3img.src = 'assets/img/img5.jpg'
        const food3 = food3div.appendChild(document.createElement('h3'))
        food3.innerHTML = "Grill"
    }

    export {createMenu}

   
   
  

