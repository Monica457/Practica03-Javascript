array =[{ "id": 1, "imagen": "imagenes/imagen.jpg" },
        { "id": 2, "imagen": "imagenes/imagen1.jpg" },
        { "id": 3, "imagen": "imagenes/imagen2.jpg" },
        { "id": 4, "imagen": "imagenes/imagen3.jpg" },
        { "id": 5, "imagen": "imagenes/imagen4.jpg" },
        { "id": 6, "imagen": "imagenes/imagen5.jpg" },
        { "id": 7, "imagen": "imagenes/imagen6.jpg" },
        { "id": 8, "imagen": "imagenes/imagen7.jpg" },
        { "id": 9, "imagen": "imagenes/imagen8.jpg" },
        { "id": 10, "imagen":"imagenes/imagen9.jpg" }];

arreglo = [1 , 2 , 3, 4, 5];
var i=0;

function iniciar(){
    for(j=0; j<5; j++){
        arreglo[j] = Math.floor(Math.random()*(10));
    }
    i =0;
    verificar();
    imprimir();
}

function anterior(){
    i--;
    verificar();
    imprimir();
}

function siguiente(){
  i++;
  verificar();
  imprimir();
}

function verificar(){
    if (i == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;
    }
    else if (i == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;
   }
}

function imprimir(){
    console.log(arreglo);
    var t = "<img src="+ array[arreglo[i]].imagen+">";
    window.document.getElementById("imagen").innerHTML = t;
}