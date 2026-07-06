import "./style.css"; //turns out i also needed to import this first
import "./template.html";
import { homepageImg, description } from "./home.js";
import { menu1, menu2, menu3, menu4 } from "./menu.js";
import {maps, contactInfo, openingHours} from "./contact.js";

const contentBox = document.getElementById("content");
//make this the intial state: 
contentBox.appendChild(homepageImg);
contentBox.appendChild(description); 

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
    contentBox.replaceChildren()

    contentBox.appendChild(menu1);
    contentBox.appendChild(menu2);
    contentBox.appendChild(menu3);
    contentBox.appendChild(menu4);
})

const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener("click", () => {
    contentBox.replaceChildren()

    contentBox.appendChild(homepageImg);
    contentBox.appendChild(description);    
})

const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", () => {
    contentBox.replaceChildren()

    contentBox.appendChild(maps);
    contentBox.appendChild(openingHours);
    contentBox.appendChild(contactInfo);
    })






//tab switching logic, event listeners which deletes the current contents of div#content