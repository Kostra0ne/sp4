const questions = [
  {
    label: "Quelle est la date des Saintes-glaces ?",
    reponses: ["11 janvier", "11 mars", "11 mai"],
    reponse: 2
  },
  {
    label: "Quelle est la couleur chaude ?",
    reponses: ["bleu", "vert", "rouge"],
    reponse: 2
  },
  {
    label: "Qui a inventé JS ?",
    reponses: ["Eich", "Crockford", "Hopper", "Toto"],
    reponse: 0
  },
  {
    label: "JS === Java ?",
    reponses: ["oui", "non"],
    reponse: 1
  },
];

// COMPTEURS ET INDEX
var score = 0;
var questionCourante = 0;

// ELEMENTS DOM UTILES
const encartQuestion = document.getElementById("question");
const btnNext = document.getElementById("next");

function afficherQuestion() {
  encartQuestion.innerHTML = `<h2>${questions[questionCourante].label}</h2>`;

  encartQuestion.innerHTML += "<ul>";

  questions[questionCourante].reponses.forEach(function(reponse, i) {
    encartQuestion.innerHTML += `<li>
            <span>${reponse}</span>
            <input type="radio" value="${i}">
        </li>`;
  });

  encartQuestion.innerHTML += "</ul>";
}

function verifierReponse() {}

function mettreAJourScore() {}

function finirJeu() {
  alert("Fin du jeu");
}



// 1 affiche la première question
// afficherQuestion();

// 2 écouter les clicks sur le bouton pour passer à la question suivante
btnNext.onclick = function () {
  verifierReponse();
  mettreAJourScore();
  questionCourante++;
  if (questionCourante < questions.length) afficherQuestion();
  else finirJeu();
};
