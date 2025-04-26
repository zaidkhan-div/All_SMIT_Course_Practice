let array = [
    {
      question: "Q1: HTML stands for ?",
      options: [
        "Hyper Text Makes Line",
        "Holistick Technical Method Library",
        "Hyper Text Markup Language",
        "None of the above",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Q2: Which is the largest heading in Html ?",
      options: ["Header Heading", "H1", "Large Heading", "H0"],
      answer: "H1",
    },
    {
      question: "Q3: We write all Html content between ______ ?",
      options: [
        "Opening and Closing tags",
        "Paranthesis",
        "Semicolon and Full Stop",
        "None of the above",
      ],
      answer: "Opening and Closing tags",
    },
    {
      question: "Q4: Html is a _______ language ?",
      options: ["Object Oriented", "Procedural", "Oriented", "Markup"],
      answer: "Markup",
    },
    {
      question: "Q5: Which Html element make a bullet list ?",
      options: ["Bullet", "ol", "ul", "None of the above"],
      answer: "ul",
    },
    {
      question: "Q6: Who is making the Web standards ?",
      options: [
        "The World Wide Web Consortium",
        "Consortium",
        "Google",
        "Mozilla",
      ],
      answer: "The World Wide Web Consortium",
    },
    {
      question: "Q7: Choose the correct HTML element to define important text ?",
      options: ["important", "i", "strong", "b"],
      answer: "strong",
    },
    {
      question: "Q8: Which of these elements are all <table> elements ?",
      options: [
        "table tr td",
        "table head tfoot",
        "table tt tr",
        "None of the above",
      ],
      answer: "table tr td",
    },
    {
      question:
        "Q9: Inline elements are normally displayed without starting a new line ?",
      options: ["True", "False", "Both above", "None of the above"],
      answer: "True",
    },
    {
      question: "Q10: How can you make a numbered list?",
      options: ["ul", "dl", "list", "ol"],
      answer: "ol",
    },
  ];
  

  const questionNumber = document.querySelector(".questionNumber");
const question = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const optionOneText = document.querySelector(".optionOneText1");
const optionTwoText = document.querySelector(".optionOneText2");
const optionThreeText = document.querySelector(".optionOneText3");
const optionFourText = document.querySelector(".optionOneText4");

let index = 0;
let score = 0;
