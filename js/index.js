const data = [
    {
        id:1,
        img:"./img/co_mde_bandeja_paisa-1920x1080.jpg",
        nombre:"Bandeja Paisa",
        datos:"Esta es una comida muy popular en la región de Antioquia y consiste en una combinación abundante de arroz, frijoles, carne (como carne molida, chicharrón o bistec), huevo frito, plátano maduro, aguacate y arepa."
    }, {
        id:2,
        img:"./img/GBBYJH5YMZC6PEINHE3HZZH4TY.jpg",
        nombre:"Ajiaco",
        datos:"Esta es una comida muy popular en la región de Antioquia y consiste en una combinación abundante de arroz, frijoles, carne (como carne molida, chicharrón o bistec), huevo frito, plátano maduro, aguacate y arepa."
    },
    {
        id:3,
        img:"./img/images.jpg",
        nombre:"Sancocho",
        datos:"Esta es una comida muy popular en la región de Antioquia y consiste en una combinación abundante de arroz, frijoles, carne (como carne molida, chicharrón o bistec), huevo frito, plátano maduro, aguacate y arepa."
    },
    {
        id:4,
        img:"./img/co_mde_bandeja_paisa-1920x1080.jpg",
        nombre:"Bandeja Paisa",
        datos:"Esta es una comida muy popular en la región de Antioquia y consiste en una combinación abundante de arroz, frijoles, carne (como carne molida, chicharrón o bistec), huevo frito, plátano maduro, aguacate y arepa."
    },
    {
        id:5,
        img:"./img/co_mde_bandeja_paisa-1920x1080.jpg",
        nombre:"Bandeja Paisa",
        datos:"Esta es una comida muy popular en la región de Antioquia y consiste en una combinación abundante de arroz, frijoles, carne (como carne molida, chicharrón o bistec), huevo frito, plátano maduro, aguacate y arepa."
    },
    {
        id:6,
        img:"./img/co_mde_bandeja_paisa-1920x1080.jpg",
        nombre:"Bandeja Paisa",
        datos:"Esta es una comida muy popular en la región de Antioquia y consiste en una combinación abundante de arroz, frijoles, carne (como carne molida, chicharrón o bistec), huevo frito, plátano maduro, aguacate y arepa."
    },
    
]
const platosInfo = document.querySelector(".platos-info")
 for(let i = 0; i < data.length ; i++){
        platosInfo.insertAdjacentHTML(
            "beforeend",
            
             `<div class="data-info-div ${i+1}">
             
             <div class="img-comida-uno">
             <img   src=${data[i].img} alt="">
             <div/>
             <div class="info-comida-uno">
             <h2>${data[i].nombre}</h2>
             <p>${data[i].datos}</p>
             </div>
             <a href=./paginado/pagina${data[i].id}/comida${data[i].id}.html>Mas Informacion</a>
             </div>`
             
        )
 }