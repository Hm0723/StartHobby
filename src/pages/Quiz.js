import React, { useState } from 'react';
import { questions, resultsData } from './QuizQuestions'; 
import { Link } from "react-router-dom";
import '../styles/Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  // The score state is now an object to track points for each trait
  const [scores, setScores] = useState({
    Adventurer: 0,
    Thinker: 0,
    Creator: 0,
  });

  // This function is called when the user clicks an answer
  const handleAnswerButtonClick = (pointsFor) => {
    // Increment the score for the corresponding trait
    setScores(prevScores => ({
      ...prevScores,
      [pointsFor]: prevScores[pointsFor] + 1,
    }));

    // Move to the next question or show the result
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // Function to determine the final result
  const calculateResult = () => {
    // Find which trait has the highest score
    let maxScore = -1;
    let resultTrait = '';
    for (const trait in scores) {
      if (scores[trait] > maxScore) {
        maxScore = scores[trait];
        resultTrait = trait;
      }
    }
    return resultTrait;
  };

  // Get the final result data
  const finalResult = calculateResult();
  const resultDisplay = resultsData[finalResult];

  return (
    <div className='quiz-container'>
      {showResult ? (
        // The view when the quiz is over
        <div className='score-section'>
          <h2>{resultDisplay.title}</h2>
          <p>{resultDisplay.description}</p>
          <Link to="/login" className="quizbtn">Login</Link>
        </div>
      ) : (
        // The view while the quiz is active
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                // Pass the 'pointsFor' value instead of 'isCorrect'
                onClick={() => handleAnswerButtonClick(answerOption.pointsFor)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;