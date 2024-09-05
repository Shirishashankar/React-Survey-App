import React, { useState } from 'react';
import { questions } from '../data/questions'; // Importing the list of questions
import { saveResponse, getResponses } from '../utils/localStorageUtils'; // Importing functions to handle local storage operations

// Survey component

const Survey = ({ onSubmit }) => {
  // State to keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // State to store responses retrieved from local storage
  const [responses, setResponses] = useState(getResponses());

  // Function to handle saving the answer to a question
  const handleAnswer = (questionId, answer) => {
    saveResponse(questionId, answer); // Saves the answer to local storage
    setResponses(prev => ({ ...prev, [questionId]: answer })); // Updates the state with the new answer
  };

  // Function to go to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Increments the index if not at the last question
    }
  };

  // Function to go to the previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1); // Decrements the index if not at the first question
    }
  };

  // Gets the current question based on the index
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="survey">
      <h2>{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h2> {/* Displays current question number */}
      <p>{currentQuestion.text}</p> {/* Displays the text of the current question */}
      {currentQuestion.type === 'rating' ? (
        // Renders an input field for rating type questions
        <input
          type="number"
          min="1"
          max={currentQuestion.scale}
          value={responses[currentQuestion.id] || ''} // Sets the value from responses or an empty string
          onChange={e => handleAnswer(currentQuestion.id, e.target.value)} // Handles value changes
          aria-label={`Rate ${currentQuestion.text}`} // Accessibility label for screen readers
        />
      ) : (
        // Render a textarea for text type questions
        <textarea
          value={responses[currentQuestion.id] || ''} // Sets the value from responses or an empty string
          onChange={e => handleAnswer(currentQuestion.id, e.target.value)} // Handles value changes
          aria-label={`Provide feedback on ${currentQuestion.text}`} // Accessibility label for screen readers
        />
      )}
      <div className="navigation-buttons">
        {/* Button to navigate to the previous question */}
        <button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {/* Button to navigate to the next question */}
        <button onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
          Next
        </button>
        {/* Button to submit the survey, shown only on the last question */}
        {currentQuestionIndex === questions.length - 1 && (
          <button onClick={onSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Survey;
