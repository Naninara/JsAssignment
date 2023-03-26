const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const quizc = document.getElementById("quiz");
const answerRadio = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const option1 = document.getElementById("a_text");
const option2 = document.getElementById("b_text");
const option3 = document.getElementById("c_text");
const option4 = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
quiz();
function quiz() {
  selectAns();
  let data = quizData[currentQuiz];
  question.innerText = data.question;
  option1.innerText = data.a;
  option2.innerText = data.b;
  option3.innerText = data.c;
  option4.innerText = data.d;
}
function selectAns() {
  answerRadio.forEach(function (ele) {
    ele.checked = false;
  });
}
function answer() {
  let ans;
  answerRadio.forEach(function (answerEl) {
    if (answerEl.checked) {
      ans = answerEl.id;
    }
  });
  return ans;
}

submitBtn.addEventListener("click", () => {
  const ans = answer();
  console.log(ans);
  if (answer) {
    if (ans === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      quiz();
    } else {
      quizc.innerHTML = `
           <h2>You answered ${score} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
    }
  }
});
