    function createMenu() {
        const container = document.getElementById('content').appendChild(document.createElement('div'))
        const menusection = container.appendChild(document.createElement('div'))
        const titlediv = menusection.appendChild(document.createElement("div"))
        titlediv.classList.add('title')
        const title = titlediv.appendChild(document.createElement('h3'))
        title.innerHTML = "Menu"
        
        const fooddiv = menusection.appendChild(document.createElement('div'))
        fooddiv.classList.add('menu')
        const food1 = fooddiv.appendChild(document.createElement('h3'))
        food1.innerHTML = "Grill"
        
        const food2= fooddiv.appendChild(document.createElement('h3'))
        food2.innerHTML = "Grill"
      
        const food3 = fooddiv.appendChild(document.createElement('h3'))
        food3.innerHTML = "Grill"
    }

    export {createMenu}
   
  

