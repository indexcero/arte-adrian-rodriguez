let cadenas = [
  "Caminar 	  Surcar \n",
  "				En  los pisos de nuestros edificios \n 				hay siete millones trescientos mil puntas, \n 				apuntan todas ellas, \n 					hacia ningún lado. \n",
  "Ángel obligado,\n",
  "		comunidad de cruces\n",
  "Bailar los rezos y callar en las confirmaciones.\n",
  "#Lasúltimasreaccionesalmomentodelúltimomilisegundoenlaporcionde \n tiempominimaparaqueelpublicoquenosescuchaseenteredelúltimo \n acontecimientoquecambiarátansólounaporciónminimadeluniverso \n",
];

let y = 500;
let init = getRandomInt(0,6)
let fontSize= 20;
let breakSize = 0;
let y_new = y+fontSize;
let n = getRandomInt(0,6);
let textosPantalla = 1
let texto;

function setup() {
  createCanvas(1280, 720);
  background(255,255,255)
}

function draw() {
  textSize(fontSize);
  fill(0,0,0);
  text(cadenas[init], 15, y);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      siguienteTexto();
    } else if (keyCode === RIGHT_ARROW) {
      siguienteTexto();
    } 
  }


function siguienteTexto(){
    //tenemos que hacer algo con los textos que se quedan
    // cheacker primero cuánto de espacio ocupó la línea anterior
    n = getRandomInt(0,6)
    textosPantalla++
    let salto = 0
    for (let i in cadenas[n]){
      if (cadenas[n][i] === '\n')
        salto++
    }
    breakSize = fontSize*salto;

    y = y - breakSize;
    // Ver cuánto reducimos aquí
    y_new= y_new - 50;

    text(cadenas[n], 15, y_new);
    fill(255,255,255);
    if (textosPantalla > 8){
      fill(255,255,255);
      square(0,0,width+500);
      y = 400;
      y_new = y + fontSize;
      textosPantalla = 0;
      init = getRandomInt(0,6)
    }
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  