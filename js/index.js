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
        datos:"Originario de la región de la sabana de Bogotá, es una sopa espesa hecha con tres tipos de papas (papas criollas, sabaneras y pastusas), pollo, maíz, guascas (hierba aromática) y alcaparras. Se sirve con aguacate y crema de leche."
    },
    {
        id:3,
        img:"./img/images.jpg",
        nombre:"Sancocho",
        datos:"Es un guiso o sopa espesa hecho con una variedad de carnes (como pollo, res o cerdo), plátano, yuca, papa, maíz y otros vegetales. Es popular en todo el país y cada región tiene su propia versión."
    },
    {
        id:4,
        img:"./img/arepas-en-freidora-de-aire-655x368.jpg",
        nombre:"Arepa",
        datos:"Es un alimento básico en la dieta colombiana. Se trata de una torta plana y redonda hecha de masa de maíz o harina de maíz, que puede ser asada, cocida al vapor o frita. Se consume en el desayuno, el almuerzo o la cena, y puede ser acompañada con queso, huevo, aguacate, carne, entre otros ingredientes."
    },
    {
        id:5,
        img:"./img/118851_pargos_fritos_con_limon___que_mas_se_puede_pedir___foto__c__venegas_.webp",
        nombre:"Bandeja de pescado",
        datos:" Colombia tiene una amplia variedad de platos de pescado, especialmente en las regiones costeras. Una bandeja de pescado típica puede incluir pescado frito o a la plancha, arroz de coco, patacones (plátanos verdes fritos y aplastados) y ensalada."
    },
    {
        id:6,
        img:"./img/lechona_del_tolima_20947_600.jpg",
        nombre:"Lechona",
        datos:"Es un plato típico de la región del Tolima y del Valle del Cauca. Consiste en un cerdo entero relleno de arroz, guisantes, carne de cerdo, cebolla y especias. Se cocina lentamente en un horno durante varias horas hasta que la piel esté crujiente y la carne tierna."
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
             <a  href=./paginado/pagina${data[i].id}/comida${data[i].id}.html>Mas Informacion</a>
             </div>`
             
        )
 }
  