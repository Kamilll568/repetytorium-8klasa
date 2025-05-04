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
  szkola: {
    title: "Szkoła",
    vocabulary: [
      { pl: "nauczyciel", en: "teacher" },
      { pl: "uczeń", en: "student" },
      { pl: "klasa", en: "class" },
      { pl: "lekcja", en: "lesson" },
      { pl: "egzamin", en: "exam" }
    ],
    quiz: [
      {
        question: "Jak jest 'nauczyciel' po angielsku?",
        options: ["student", "teacher", "class", "lesson"],
        answer: 1
      },
      {
        question: "Jak jest 'egzamin' po angielsku?",
        options: ["test", "exam", "quiz", "homework"],
        answer: 1
      }
    ]
  },
  praca: {
    title: "Praca",
    vocabulary: [
      { pl: "praca", en: "job" },
      { pl: "zawód", en: "profession" },
      { pl: "pracownik", en: "employee" },
      { pl: "szef", en: "boss" },
      { pl: "biuro", en: "office" }
    ],
    quiz: [
      {
        question: "Jak jest 'praca' po angielsku?",
        options: ["work", "job", "profession", "office"],
        answer: 1
      },
      {
        question: "Jak jest 'szef' po angielsku?",
        options: ["boss", "employee", "manager", "director"],
        answer: 0
      }
    ]
  },
  zycie: {
    title: "Życie rodzinne i towarzyskie",
    vocabulary: [
      { pl: "rodzina", en: "family" },
      { pl: "przyjaciel", en: "friend" },
      { pl: "urodziny", en: "birthday" },
      { pl: "ślub", en: "wedding" },
      { pl: "wakacje", en: "holiday" }
    ],
    quiz: [
      {
        question: "Jak jest 'rodzina' po angielsku?",
        options: ["family", "relatives", "parents", "siblings"],
        answer: 0
      },
      {
        question: "Jak jest 'ślub' po angielsku?",
        options: ["marriage", "wedding", "engagement", "anniversary"],
        answer: 1
      }
    ]
  },
  zywienie: {
    title: "Żywienie",
    vocabulary: [
      { pl: "jedzenie", en: "food" },
      { pl: "napój", en: "drink" },
      { pl: "śniadanie", en: "breakfast" },
      { pl: "obiad", en: "lunch" },
      { pl: "kolacja", en: "dinner" }
    ],
    quiz: [
      {
        question: "Jak jest 'śniadanie' po angielsku?",
        options: ["breakfast", "lunch", "dinner", "supper"],
        answer: 0
      },
      {
        question: "Jak jest 'napój' po angielsku?",
        options: ["drink", "beverage", "juice", "water"],
        answer: 0
      }
    ]
  },
  // Dodaj więcej działów i słówek tutaj...
};

// Funkcja ładowania sekcji
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

// Funkcja do sprawdzania odpowiedzi
function checkAnswer(section, quizIndex, optionIndex) {
  const correctAnswer = data[section].quiz[quizIndex].answer;
  const options = document.querySelectorAll(`#quiz .quiz-question:nth-child(${quizIndex + 1}) .quiz-options button`);

  // Sprawdzanie odpowiedzi
  if (optionIndex === correctAnswer) {
    options[optionIndex].classList.add("correct");
  } else {
    options[optionIndex].classList.add("incorrect");
  }
}
