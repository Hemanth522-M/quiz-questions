import React, {Component} from 'react';

import questionServices from './QuestionServices';

export default class QuestionsLists extends Component {

    constructor(props) {
        super(props);
        this.state ={
            data: [],
            score:0,
            scoreOpen: false,
        }
    }

    
    getQuestions = () => {
        questionServices().then(question => {
            this.setState({
                data: question
            });
        });
    }

    componentDidMount() {
        this.getQuestions();
    }
    
    handleOptionValues = (id) => {
        if(id === true) {
            this.setState({
                score: this.state.score + 3,
                checked:"checked"
            });
        }
        else {
            this.setState({
                score: this.state.score -1,
            })
        }
    }

    submitQuiz = () => {
        this.setState({
            scoreOpen: true
        })
    }

    closeQuiz = () => {
        window.location.reload();
        this.setState({
            scoreOpen: false,
        })
    }

    render() {
        return(
            <div className="questionList">
                {this.state.data.map((number,index) => (
                    <div key={index}>
                        <div className="questionName">
                            <span className="questionNumber">{index+1}</span>
                            <p>{number.question}</p>
                        </div>
                        <div className="optionmainDiv">
                            {number.options.map((value,optionIndex) => (
                                <div className="options" key={optionIndex}>
                                    <span className="optionNumbers">{value.id}</span>
                                    <label className="container">
                                        <input type="radio" name={`question+${index}`} id={value.id}
                                            onClick={()=>this.handleOptionValues(value.isCorrect)} 
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    <p className="optionValues">{value.option}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <br style={{clear: 'both'}} />
                <div className="buttonDiv">
                    <button className="button" onClick={this.submitQuiz}>
                        Submit
                    </button>
                </div>
                {this.state.scoreOpen === true &&
                    <div id="myModal" class="modal">
                        <div class="modal-content">
                            <h1 className="scoreHeading">Quiz (Score board)</h1>
                            <span class="close" onClick={this.closeQuiz}>&times;</span>
                            <p><span className="score">Your Score is:</span>&nbsp;&nbsp;{this.state.score}</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}