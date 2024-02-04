var gif_1;
var gif_2;
var gif_3;
var gif_4;
var gif_5;
let index_personaje = 0;
let personajes = [];
let textos = [];
let screen = 0;
let primerClick = 0;
let capture;
let size_x = 1024;
let size_y = 720;
let position_x = 50;
let position_y = 30;
/*
In order to use a gif you need to load and use the image slightly differently. Using a gif in this editor requires its file size 
to be less that 5MB too.
*/

function preload() {
  personajes[0] = createImg("personajes_gif/Aleno_anim2.gif");
  personajes[1] = createImg("personajes_gif/Heartless_anim.gif");
  personajes[2] = createImg("personajes_gif/Julie_anim.gif");
  personajes[3] = createImg("personajes_gif/Mateo_anim.gif");
  personajes[4] = createImg("personajes_gif/Penelope_anim.gif");
  textos[0] = createImg("textos_gif/Aleno_text.gif");
  textos[1] = createImg("textos_gif/heartless_text_small.gif");
  textos[2] = createImg("textos_gif/julie_text.gif");
  textos[3] = createImg("textos_gif/mateo_text.gif");
  textos[4] = createImg("textos_gif/penelope_text.gif");
  for (let i = 0; i < personajes.length; i++) {
    personajes[i].hide();
    textos[i].hide();
  }
}

function setup() {
  createCanvas(size_x+150, size_y+150);
  background("white");
  //noLoop();
  print("starting");
  capture = createCapture(VIDEO);
  capture.size(size_x, size_y);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, size_x+150, size_y+150);
  if (primerClick === 0) {
    personajeInicial();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    anteriorPersonaje();
  } else if (keyCode === RIGHT_ARROW) {
    siguientePersonaje();
  } else if (keyCode === ENTER) {
    personajeSeleccionado();
  } else if (keyCode === DELETE) {
    siguientePersonaje();
  } else if (keyCode === RETURN) {
    anteriorPersonaje();
  }
}

function personajeInicial() {
  // Existe un bug: al inicio no se puede seleccionar el texto del personaje inicial
  clearAll();
  personajes[index_personaje].show();
  personajes[index_personaje].position(50, 30);
  personajes[index_personaje].size(1024, 720);
}

function siguientePersonaje() {
  // if index_personaje < 4 {}
  primerClick++;
  if (index_personaje < 4) {
    index_personaje++;
  } else {
    index_personaje = 0;
  }
  clearAll();
  personajes[index_personaje].show();
  personajes[index_personaje].position(50, 30);
  personajes[index_personaje].size(1024, 720);
}

function anteriorPersonaje() {
  primerClick++;
  if (index_personaje > 0) {
    index_personaje--;
  } else {
    index_personaje = 4;
  }
  clearAll();
  personajes[index_personaje].show();
  personajes[index_personaje].position(50, 30);
  personajes[index_personaje].size(1024, 720);
}
function personajeSeleccionado() {
  console.log("Personaje seleccionado");
  clearAll();
  textos[index_personaje].show();
  textos[index_personaje].position(50, 30);
  textos[index_personaje].size(1024, 720);
}

function clearAll() {
  for (let i = 0; i < personajes.length; i++) {
    personajes[i].hide();
    textos[i].hide();
  }
}
