import React, { Component } from 'react';
import './App.css';
import Question from './components/Question.js';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listQuestions: [],
      index: 0,
      isLoading: true,
      score: 0,
    };
  }
  async componentDidMount() {
    const {
      data: { results },
    } = await axios.get(
      'https://opentdb.com/api.php?amount=15&type=multiple&encode=url3986'
    );

    this.setState({
      listQuestions: results,
      isLoading: false,
    });
  }

  getCorrectAnswer(value) {
    const { listQuestions, index, score } = this.state;
    if (listQuestions[index].correct_answer === value) {
      this.setState({
        index: index + 1,
        score: score + 1,
      });
    } else {
      this.setState({
        index: index + 1,
      });
    }
  }

  render() {
    console.log(this.state.listQuestions);
    const { listQuestions, index, isLoading, score } = this.state;

    if (isLoading) {
      return <div>LOADING</div>;
    }

    if (listQuestions.length === index) {
      return <p>Terminé</p>;
    }

    return (
      <div className="App">
        <h1>Quizz</h1>
        <div className="containerQuizz">
          <h2>
            Score : {score} / {this.state.listQuestions.length}
          </h2>

          <Question
            questionDatas={listQuestions[index]}
            onCheckAnswer={this.getCorrectAnswer.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
