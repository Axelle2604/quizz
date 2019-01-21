import React from 'react';
import AnswerButton from './AnswerButton.js';
import './question.css';

function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.questionDatas;
  const listQuestions = [...correct_answer, ...incorrect_answers];
  console.log('liste :' + listQuestions);
  return (
    <div className="question">
      <p>{decodeURIComponent(question)}</p>
      <div className="buttons">
        {incorrect_answers.map(incorrectAnswers => (
          <AnswerButton
            key={incorrectAnswers}
            answer={incorrectAnswers}
            onCheckAnswer={props.onCheckAnswer}
          />
        ))}
        <AnswerButton
          key="correctAnswer"
          answer={correct_answer}
          onCheckAnswer={props.onCheckAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
