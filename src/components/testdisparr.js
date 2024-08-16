// import { useState } from "react";

// const [tests, updateTests] = useState()

const tests = [
    {
      id: 1,
      testName: "DBMS Exam",
      testTime: 2,
      testQuestions: 10,
      testMarks: 20,
      notCompleted: true,
      testContent: [
        {
            "question": "Which of the following are programming languages?",
            "options": ["Python", "HTML", "JavaScript", "CSS"],
            "correct_answers": [0, 2]
        },
        {
            "question": "Which of the following are fruits?",
            "options": ["Apple", "Carrot", "Banana", "Cucumber"],
            "correct_answers": [0, 2]
        },
        {
            "question": "Which of the following are web development frameworks?",
            "options": ["React", "Django", "MySQL", "Flask"],
            "correct_answers": [0, 1, 3]
        }
    ]
    },
    {
      id: 2,
      testName: "Algorithms Exam",
      testTime: 15,
      testQuestions: 20,
      testMarks: 40,
      notCompleted: true,
    },
];

  
export default tests;