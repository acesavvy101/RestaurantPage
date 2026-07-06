import fishnchips from "/assets/menu1.jpg"
import burger from "/assets/menu2.jpg"
import cocktail from "/assets/menu3.jpg"
import coffee from "/assets/menu4.jpg"

const menu1 = document.createElement('img')
menu1.src = fishnchips
menu1.className = "menuImage"

const menu2 = document.createElement('img')
menu2.src = burger
menu2.className = "menuImage"

const menu3 = document.createElement('img')
menu3.src = cocktail
menu3.className = "menuImage"

const menu4 = document.createElement('img')
menu4.src = coffee
menu4.className = "menuImage"

export {menu1, menu2, menu3, menu4};

// add styling later!!