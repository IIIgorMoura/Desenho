
let canvas = document.getElementById("canvas");

// contexto do desenho, esse é o método que retorna um desenho, usar o parâmetro 2d significa que o objeto que  será renderizado será bidimensional
let contexto = canvas.getContext("2d");

// id se estamos desenhando
let desenhando = false;

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.beginPath();

    // clientX fornece coordenadas X / canvas.offsetLeft retorna medida em pixel, o msm serve para clientY e offsetTop 
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
});

canvas.addEventListener("mousemove", function(event){
    if(desenhando){

        // id linhas tracadas
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
})

//desativar desenho
canvas.addEventListener("mouseup", function(event){
    desenhando = false;
})

// mudar cores
function trocaCorPreto(){
    contexto.strokeStyle = "#000"
};

function trocaCorAzul(){
    contexto.strokeStyle = "#0095ff";
};

function trocaCorVerde(){
    contexto.strokeStyle = "#00ff00";
};

function trocaCorVerde2(){
    contexto.strokeStyle = "#008000";
};

function trocaCorMarrom(){
    contexto.strokeStyle = "#803f3f";
};

function trocaCorMarrom2(){
    contexto.strokeStyle = "#673434";
};

function trocaCorLaranja(){
    contexto.strokeStyle = "#ff8c00";
};

function trocaCorAmarelo(){
    contexto.strokeStyle = "#ffff00";
};

function trocaCorBranco(){
    contexto.strokeStyle = "#fff";
};

function trocaCorVermelho(){
    contexto.strokeStyle = "#ff0000";
};


// larguraPincel
let larguraPincel = 1
document.getElementById("exibirLargura").innerHTML = larguraPincel;

function aumentaLargura(){
    larguraPincel++;
    contexto.lineWidth = larguraPincel;
    document.getElementById("exibirLargura").innerHTML = larguraPincel;
}

function diminuiLargura(){
    larguraPincel--;
    if(larguraPincel < 2){
        larguraPincel = 1
    }
    contexto.lineWidth = larguraPincel;
    document.getElementById("exibirLargura").innerHTML = larguraPincel;
}

