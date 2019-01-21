import React from 'react';
import './answerButton.css';

function AnswerButton(props) {
  const onClick = () => props.onCheckAnswer(props.answer);
  return <button onClick={onClick}>{decodeURIComponent(props.answer)}</button>;
}

export default AnswerButton;
