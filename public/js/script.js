// Funciones para abrir y cerrar la barra de navegacion//

const openNav = () => {
    document.getElementById("menu").style.width = "20em";
    document.getElementById("main");
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

const closeNav = () => {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#F9F9F9";
}



//-------------------------Función para Galeria fotografica----------------------------//

// window.addEventListener('load', () => {

//   let indiceImagenes = 0;
//   let temporizador = 3000;
//   const imagenes = [];
//   const cambiarImagen;

//   //le asigno un indice a cada imagen del array//
//   imagenes[0] = '/img/productos/home/promociones/1.jpeg';
//   imagenes[1] = '/img/productos/home/promociones/2.jpeg';
//   imagenes[2] = '/img/productos/home/promociones/3.jpg';
//   imagenes[3] = '/img/productos/home/promociones/4.jpg';

//   // Hago una funcion para que las imagenes se cambien automaticamente
//   cambiarImagen = () => {
//     document.slideShow.src = imagenes[indiceImagenes];

//     if (indiceImagenes < imagenes.length - 1){
//       indiceImagenes++;
//     } else {
//       indiceImagenes = 0;
//     }
 
//     setTimeout('cambiarImagen()', temporizador);
//   }
// });
