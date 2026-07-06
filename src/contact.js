import location from "/assets/location.png"
const maps = document.createElement('img')
maps.src = location
maps.id = "mapsImage"

const openingHours = document.createElement('p')
openingHours.textContent = `Opening Hours:
Mon - Fri : 11AM-9PM | Sat - Sun: 11AM-6PM`
openingHours.id = "openingHours"


const contactInfo = document.createElement('p')
contactInfo.textContent = `Phone Number: 0977-304-940 | 
Email: DazzlersFishandChips@gmail.com`
contactInfo.id = "contactInfo"


export {maps, openingHours, contactInfo};