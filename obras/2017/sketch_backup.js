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
let size_x = 720;
let size_y = 720;
let position_x = 0;
let position_y = 0;
let posicion_personaje_x= 0;
let posicion_personaje_y= 0;
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
  MyCanvas = createCanvas(size_x, size_y);
  MyCanvas.parent("avatares")
  background(0);
  //noLoop();
  print("starting");
  capture = createCapture(VIDEO);
  capture.size(size_x, size_y);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, size_x, size_y);
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
  personajes[index_personaje].position(posicion_personaje_x, posicion_personaje_y);
  personajes[index_personaje].size(720, 720);
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
  personajes[index_personaje].position(posicion_personaje_x, posicion_personaje_y);
  personajes[index_personaje].size(720, 720);
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
  personajes[index_personaje].position(posicion_personaje_x, posicion_personaje_y);
  personajes[index_personaje].size(720, 720);
}
function personajeSeleccionado() {
  console.log("Personaje seleccionado");
  clearAll();
  textos[index_personaje].show();
  personajes[index_personaje].position(posicion_personaje_x, posicion_personaje_y);
  personajes[index_personaje].size(720, 720);
}

function clearAll() {
  for (let i = 0; i < personajes.length; i++) {
    personajes[i].hide();
    textos[i].hide();
  }
}
