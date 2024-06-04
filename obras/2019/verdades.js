const verdades = [
  "Invi",
  "Anti",
  "Post",
  "Para-",
  "An",
  "Des",
  "Ma",
  "Ra",
  "Pre",
  "No-",
  "4562",
  "x88jdj",
  "Nebe",
  "Rama",
  "Hoja",
  "Luz",
  "Árbol",
  "Inter",
  "Trans",
  "Digi",
  "Nobo",
  "Khori",
  "Naya",
  "Colque",
  "Pan",
];
const verdades2 = [
  "plano",
  "esféra",
  "nuclear",
  "pato",
  "lumi",
  "pere",
  "mara",
  "na",
  "pensamiento",
  "objeto",
  "ser sintiente",
  "humano",
  "género",
  "empatía",
  "frontera",
  "tortuga",
  "raíz",
  "semilla",
  "tierra",
  "na",
  "pa",
  "re",
  "ros",
  "res",
  "ras",
];
const verdades3 = [
  " símbolo",
  "manta",
  ", es una verdad",
  ", no un axioma",
  "   NO ES POSIBLE",
  ", existe de alguna forma.",
  " es comprobable",
  " no es comprobable",
  " vive",
  " muere",
];
const verdad = "INIT";
const verdad2 = "init";

/* if event.key == pygame.K_a:
verdad = random.choice(verdades) + random.choice(verdades2)
verdad2 = random.choice(verdades3) */

let randomIndex = 0;
let randomIndex_2 = 0;
let randomIndex_3 = 0;

console.log(verdades[randomIndex] + verdades2[randomIndex_2]);
console.log(verdades3[randomIndex_3]);

// Click on the canvas to begin detecting key presses.

function setup() {
  var myCanvas = createCanvas(800, 300);
  myCanvas.parent("verdades");
}

function draw() {
  if (keyIsPressed === true) {
    randomIndex = Math.floor(Math.random() * verdades.length);
    randomIndex_2 = Math.floor(Math.random() * verdades2.length);
    randomIndex_3 = Math.floor(Math.random() * verdades3.length);
  } else {
    background(0);
  }
  
  textSize(60);
  fill(255);
  text(verdades[randomIndex] + verdades2[randomIndex_2], 50, 100);
  text(verdades3[randomIndex_3], 50, 200);

}
