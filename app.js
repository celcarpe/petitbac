let $ul = document.querySelector(".result");

const themes = [
"Phrases d'ascenseur",
"Foirer un entretien d'embauche",
"Bagarre direct",
"Pokemon fictif",
"Mot gênant",
"Phrase que tu peux dire en couple mais pas en repas de famille",
"Si c\'est liquide c\'est pas normal",
"Nom de restau à 1,5/5 sur google",
"C'est pas facile",
"Gâcher un rencard direct",
"Le prochain Harry Potter (Harry et...)",
"Recherche google de la honte",
"Truc que tu peux dire qu'en 2009",
"Tu fais ça c'est punition directe par les darons",
"Nom de DJ de boîte de nuit d'Evreux",
"S'en sort pas trop mal contre un ours",
"Travail fictif",
"Phrase stylée avant de mourir"
];

// Shuffle

function shuffle(array) {
  let currentIndex = array.length,
  temporaryValue,
  randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Lettre aléatoire

let input_id = "random-letter";
function randLetter() {
  let letters = "ABCDEFGHIJLMNOPQRSTUV".split("");
  let mixLetters = shuffle(letters);
  document.getElementById(input_id).innerHTML = mixLetters[0];
}

// Liste

function createList() {
  let randomized = shuffle(themes);

  $ul.innerHTML = "";
  randomized.slice(themes, 6).forEach((theme) => {
    let $li = document.createElement("li");
    $ul.appendChild($li);
    $li.innerText = theme;
    
    $li.onclick = newli;
  });
}
function newli() {
  let randomized = shuffle(themes);
  let theme = randomized[0];
  this.innerText = theme;
}

// Règles

function regles() {
  let $bloc = document.querySelector('#rules');
  $bloc.classList.toggle('visible');
}