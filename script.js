let q = document.getElementById("ques");
let l1 = document.getElementById("l1");
let l2 = document.getElementById("l2");
let l3 = document.getElementById("l3");
let l4 = document.getElementById("l4");
let op = document.getElementsByName("options");
let qno = document.getElementById("qno");
let res = document.getElementById("res");
let ind = 0;

var questions = [
  {
    question: "Which of the symbol is used to write css for id",
    option1: ".",
    option2: "#",
    option3: ">",
    option4: "~",
    answer: "option2",
  },
  {
    question: "Who is making the Web standards?",
    option1: " The World Wide Web Consortium",
    option2: "Google",
    option3: "Microsoft",
    option4: "Morzilla",
    answer: "option1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option1: "<hr>",
    option2: "<break>",
    option3: "<br>",
    option4: "<lb>",
    answer: "option3",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<h1>",
    option2: "<header>",
    option3: "<head>",
    option4: "<h6>",
    answer: "option1",
  },
];
let score = 0;
let quiz = document.getElementsByClassName("table");
let r = document.getElementsByClassName("result");
function Check() {
  for (var i = 0; i < op.length; i++) {
    if (op[i].checked) {
      if (op[i].value == questions[ind - 1].answer) score += 5;
      document.querySelector(
        "input[type=radio][value=" + op[i].value + "]:checked"
      ).checked = false;
    }
  }
}

function modify() {
  if (ind != 0) Check();
  if (ind == 4) {
    quiz[0].style.display = "none";
    r[0].style.display = "block";
    res.innerText = score;
    res.style.color = "blue";
    score = 0;
    ind = 0;
  } else {
    r[0].style.display = "none";
    quiz[0].style.display = "block";
    qno.innerText = ind + 1;
    q.innerText = questions[ind].question;
    l1.innerText = questions[ind].option1;
    l2.innerText = questions[ind].option2;
    l3.innerText = questions[ind].option3;
    l4.innerText = questions[ind].option4;
    ind++;
  }
}
