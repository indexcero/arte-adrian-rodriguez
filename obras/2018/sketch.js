let cadenas = [
  "Caminar 	  Surcar \n",
  "				En  los pisos de nuestros edificios \n 				hay siete millones trescientos mil puntas, \n 				apuntan todas ellas, \n 					hacia ningún lado. \n",
  "Ángel obligado,\n",
  "		comunidad de cruces\n",
  "Bailar los rezos y callar en las confirmaciones.\n",
  "#Lasúltimasreaccionesalmomentodelúltimomilisegundoenlaporcionde \n tiempominimaparaqueelpublicoquenosescuchaseenteredelúltimo \n acontecimientoquecambiarátansólounaporciónminimadeluniverso \n",
];

console.log("Holiwis");

let sonido_1;
let sonido_2;
let sonido_3;

function preload() {
  sonido_1 = loadSound("./nota001_1.wav");
  sonido_2 = loadSound("./nota002_2.wav");
  sonido_3 = loadSound("./nota003_2.wav");
}

let y = 500;
let init = getRandomInt(0, 6);
let fontSize = 20;
let breakSize = 0;
let y_new = y + fontSize;
let n = getRandomInt(0, 6);
let textosPantalla = 1;
let texto;
let sound_index = 0;

function setup() {
  var myCanvas = createCanvas(720, 720);
  myCanvas.parent("escritura");
  background(255, 255, 255);
}

function draw() {
  textSize(fontSize);
  fill(0, 0, 0);
  text(cadenas[init], 15, y);
  
}

function keyPressed() {
  sound_index = getRandomInt(0, 3);
  console.log(sound_index)
  if (sound_index === 0) {
    sonido_1.play();
  } else if (sound_index === 1) {
    sonido_2.play();
  } else {
    // soundIndex === 2
    sonido_3.play();
  }
  fill(255, 255, 255);
  siguienteTexto();
}

function siguienteTexto() {
  //tenemos que hacer algo con los textos que se quedan
  // cheacker primero cuánto de espacio ocupó la línea anterior
  n = getRandomInt(0, 6);
  textosPantalla++;
  let salto = 0;
  for (let i in cadenas[n]) {
    if (cadenas[n][i] === "\n") salto++;
  }
  breakSize = fontSize * salto;

  y = y - breakSize;
  // Ver cuánto reducimos aquí
  y_new = y_new - 20;

  text(cadenas[n], 15, y_new);
  fill(255, 255, 255);
  if (textosPantalla > 8) {
    fill(255, 255, 255);
    square(0, 0, width + 500);
    y = 400;
    y_new = y + fontSize;
    textosPantalla = 0;
    init = getRandomInt(0, 6);
  }
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
