const data = {
  czlowiek: {
    title: "Człowiek",
    vocabulary: [
      { pl: "imię", en: "first name" },
      { pl: "nazwisko", en: "surname" },
      { pl: "wiek", en: "age" },
      { pl: "urodzony", en: "born" },
      { pl: "narodowość", en: "nationality" }
    ],
    quiz: [
      {
        question: "Jak jest 'imię' po angielsku?",
        options: ["surname", "name", "first name", "nickname"],
        answer: 2
      },
      {
        question: "Jak jest 'wiek' po angielsku?",
        options: ["old", "age", "young", "birthday"],
        answer: 1
      }
    ]
  },
  dom: {
    title: "Dom",
    vocabulary: [
      { pl: "dom", en: "house" },
      { pl: "mieszkanie", en: "flat" },
      { pl: "pokój", en: "room" },
      { pl: "kuchnia", en: "kitchen" },
      { pl: "łazienka", en: "bathroom" }
    ],
    quiz: [
      {
        question: "Jak jest 'kuchnia' po angielsku?",
        options: ["bathroom", "kitchen", "bedroom", "living room"],
        answer: 1
      },
      {
        question: "Jak jest 'mieszkanie' po angielsku?",
        options: ["flat", "house", "room", "apartment"],
        answer: 0
      }
    ]
  },
  // Inne działy...
};

function loadSection(section) {
  const sectionData = data[section];
  if (!sectionData) return;

  // Wyświetlenie tytułu działu
  document.getElementById("section-title").textContent = sectionData.title;

  // Wyświetlenie słówek
  let vocabularyHTML = "<h3>Słówka:</h3><ul>";
  sectionData.vocabulary.forEach(item => {
    vocabularyHTML += `<li>${item.pl} - ${item.en}</li>`;
  });
  vocabularyHTML += "</ul>";
  document.getElementById("vocabulary").innerHTML = vocabularyHTML;

  // Wyświetlenie quizu
  let quizHTML = "<h3>Quiz:</h3>";
  sectionData.quiz.forEach((quizItem, index) => {
    quizHTML += `
      <div class="quiz-question">
        <h3>${quizItem.question}</h3>
        <div class="quiz-options">
          ${quizItem.options.map((option, i) => `
            <button onclick="checkAnswer('${section}', ${index}, ${i})">${option}</button>
          `).join('')}
        </div>
      </div>
    `;
  });
  document.getElementById("quiz").innerHTML = quizHTML;
}

function checkAnswer(section, quizIndex, optionIndex) {
  const correctAnswer = data[section].quiz[quizIndex].answer;
  const options = document.querySelectorAll(`#quiz .quiz-question:nth-child(${quizIndex + 1}) .quiz-options button`);

  if (optionIndex === correctAnswer) {
    options[optionIndex].classList.add("correct");
  } else {
    options[optionIndex].classList.add("incorrect");
  }
}
