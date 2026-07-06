console.log("Hello world");

const contentBox = document.getElementById("content");

import { homepageImg, description } from "./home.js";
contentBox.appendChild(homepageImg);
contentBox.appendChild(description);

import { menu1, menu2, menu3, menu4 } from "./menu.js";
contentBox.appendChild(menu1);
contentBox.appendChild(menu2);
contentBox.appendChild(menu3);
contentBox.appendChild(menu4);

//tab switching logic, event listeners which deletes the current contents of div#content