const boton = document.querySelector(".nigth-button");
const divContainer = document.querySelector("body");
 
boton.addEventListener('click', () => {
   divContainer.classList.toggle("dark-mode")
});