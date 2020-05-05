const questions = [
  {
    label: "quelle est la couleur chaude ?",
    reponses: ["bleu", "vert", "rouge"],
    reponse: 2,
  },
  {
    label: "qui a inventé JS ?",
    reponses: ["Eich", "Crockford", "Hopper", "Toto"],
    reponse: 0,
  },
  {
    label: "JS === Java ?",
    reponses: ["oui", "non"],
    reponse: 1,
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

  questions[questionCourante].reponses.forEach((rep, i) => {
    encartQuestion.innerHTML += `<li>
            <span>${rep}</span>
            <input type="radio" value="${i}">
        </li>`;
  });

  encartQuestion.innerHTML += "</ul>";
}

function verifierReponse() {}

function mettreAJourScore() {}

// 1 affiche la première question

afficherQuestion();

btnNext.onclick = function () {
  verifierReponse();
  mettreAJourScore();
  questionCourante++;
  if (questionCourante < questions.length) afficherQuestion();
  else alert("Fin du jeu");
};
