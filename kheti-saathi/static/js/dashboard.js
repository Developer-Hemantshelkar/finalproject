function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }
  
  /* QUIZ DATA */
  const quiz = [
    {
      q: "Which is best for organic pest control?",
      options: ["Chemical spray", "Neem oil", "Urea", "Pesticide"],
      answer: 1
    },
    {
      q: "What improves soil fertility?",
      options: ["Plastic", "Compost", "Salt", "Diesel"],
      answer: 1
    },
    {
      q: "Best irrigation method for water saving?",
      options: ["Flood", "Sprinkler", "Drip", "Manual"],
      answer: 2
    }
  ];
  
  let index = 0;
  
  function loadQuestion() {
    document.getElementById("question").innerText = quiz[index].q;
    quiz[index].options.forEach((opt, i) => {
      document.getElementById("opt" + i).innerText = opt;
    });
  }
  
  function nextQuestion() {
    if (index < quiz.length - 1) index++;
    loadQuestion();
  }
  
  function prevQuestion() {
    if (index > 0) index--;
    loadQuestion();
  }
  
  function selectOption(i) {
    alert(i === quiz[index].answer ? "Correct ✅" : "Wrong ❌");
  }
  
  loadQuestion();
  const lang = {
    en: {
      tips: "Organic Farming Tips",
      quiz: "Quiz"
    },
    hi: {
      tips: "जैविक खेती सुझाव",
      quiz: "प्रश्नोत्तरी"
    }
  };
  
  function changeLang(l) {
    document.querySelector("#tipsTitle").innerText = lang[l].tips;
  }
    