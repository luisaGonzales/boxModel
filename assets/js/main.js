//Colocamos todas las rutas en un array
var pictures = ["assets/img/a1.jpg", "assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
//Traemos el espacio necesario
var allPictures = document.getElementById("allPictures");
//Creamos imagenes recorriendo el for
for (var i = 0; i < pictures.length; i++) {
    var pic = document.createElement("img");
    pic.src = pictures[i];
    pic.setAttribute("class","bordes");
    allPictures.appendChild(pic);
}