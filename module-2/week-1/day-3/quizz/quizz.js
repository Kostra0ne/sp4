const questions = [
  {
    label: "Quelle est la date des Saintes-glaces ?",
    reponses: ["11 janvier", "11 mars", "11 mai"],
    reponse: 2,
  },
  {
    label: "Quelle est la couleur chaude ?",
    reponses: ["bleu", "vert", "rouge"],
    reponse: 2,
  },
  {
    label: "Qui a inventé JS ?",
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
var score;
var questionCourante;

// ELEMENTS DOM UTILES
const btnStart = document.querySelector("#intro button");
const btnNext = document.getElementById("next");
const btnReplay = document.getElementById("replay");
const quizzElement = document.getElementById("quizz");
const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const scoreFinalElement = document.getElementById("score_final");
const introElement = document.getElementById("intro");
const outroElement = document.getElementById("outro");

function afficherQuestion() {
  questionElement.innerHTML = `<h2>${questions[questionCourante].label}</h2>`;

  questionElement.innerHTML += "<ul>";

  questions[questionCourante].reponses.forEach(function (reponse, i) {
    questionElement.innerHTML += `<li>
            <span>${reponse}</span>
            <input type="radio" value="${i}" name="reponse">
        </li>`;
  });

  questionElement.innerHTML += "</ul>";
}

function verifierReponse() {
  const checkedInput = document.querySelector("input:checked");
  // checkedInput vaut un objet si l'user à selectionné un input-radio, sinon null
  // on ne peut pas accéder à la value de null ...
  return Number(checkedInput.value) === questions[questionCourante].reponse
    ? 1
    : 0;
}

function mettreAJourScore(val) {
  score += val;
  scoreElement.textContent = score;
}

function finirJeu() {
  quizzElement.classList.add("is-hidden");
  outroElement.classList.remove("is-hidden");
  scoreFinalElement.textContent = `Votre score : ${score}`;
}

function demarrerQuizz() {
  score = 0;
  questionCourante = 0;
  scoreElement.textContent = score;
  introElement.classList.add("is-hidden");
  outroElement.classList.add("is-hidden");
  quizzElement.classList.remove("is-hidden");
  afficherQuestion();
}

function gererTourDeJeu() {
  try {
    const scoreDelaQuestion = verifierReponse();
    // ci-dessus : lève une erreur si l'user n'a pas encore selectionné une réponse
    mettreAJourScore(scoreDelaQuestion);
    questionCourante++;

    if (questionCourante < questions.length) afficherQuestion();
    else finirJeu();
  } catch (err) {
    alert("saisir réponse please !");
  }
}

// EVENT LISTENERS + EVENT HANDLER
btnStart.onclick = demarrerQuizz;
btnReplay.onclick = demarrerQuizz;
btnNext.onclick = gererTourDeJeu;
