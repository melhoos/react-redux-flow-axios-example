// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuestionsByQuestionSetId} from '../../actions/getQuestions';
import {addUserAnswer} from '../../actions/addUserAnswer';
import type {QuestionModel} from '../../models/questionModel';
import {Redirect } from 'react-router';
import PresentUser from '../presentUser';
import Button from '@material-ui/core/Button';
import Question from './question';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type State = {
    curretQuestionIndex: number,
    error: bool
}

type Props = {
    getQuestionsByQuestionSetId(id: number): void,
    addUserAnswer(userAnswer: obj): void,
    questions: [QuestionModel],
    loading: bool
};

class Questions extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            curretQuestionIndex: 0,
            error: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.qsId
        this.props.getQuestionsByQuestionSetId(id).then((response) => {
            this.setState({
                error: response.error !== undefined
            })
          })
    }

    renderLoading () {
        return (
            <FontAwesomeIcon className="quiz-loader" icon="spinner" />
        )
    }

    renderError () {
        return (
            <Redirect to="/notFound" /> 
        )
    }

    sendUserAnswer() { // MOVE THIS TO QUESTION
        const {curretQuestionIndex} = this.state;
        const {questions} = this.props;
        const currentQuestion = questions[curretQuestionIndex]
        console.log("send!!", questions)

        const questionSetId = this.props.match.params.qsId;
        const questionId = currentQuestion.Id;


        /* data = 
{
    "questionSetId": 1,
    "questionId": 3,
    "userAnswerValues": [
        {
            "value": 3,
            "freeText": null,
            "answerAlternativeId": 1
        }
    ]
} */
    }

    onClickNextButton () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        if (curretQuestionIndex < ( questions.length-1) ) {
            this.setState((prevState, props) => ({
                curretQuestionIndex: prevState.curretQuestionIndex + 1
            })); 
        } 
    }

    onClickBackButton () {
        const {curretQuestionIndex} = this.state;
        if (curretQuestionIndex > 0 ) {
            this.setState((prevState, props) => ({
                curretQuestionIndex: prevState.curretQuestionIndex - 1
            })); 
        } 
    }

    renderButtons () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        const showNextBtn = questions.length > curretQuestionIndex+1;
        const showBackBtn = curretQuestionIndex != 0;
        const id = this.props.match.params.qsId
        return (
            <div>
                {showBackBtn ? (
                    <span className="navButton">
                        <Button 
                            size="large" 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => this.onClickBackButton()}
                            > Tilbake 
                        </Button>
                    </span>
                ) : (<span/>)}
                { showNextBtn ? (
                    <span className="navButton">
                        <Button size="large" variant="contained" color="primary" onClick={() =>{this.onClickNextButton()}}> Neste </Button>
                    </span>
                    ) : (
                        <span className="navButton">
                         <Link to={"/quizzles/"+id+"/finished"}>
                            <Button size="large" variant="contained" color="primary" onClick={() => this.sendUserAnswer()}> Send inn </Button>
                        </Link>
                        </span>
                    )
                }
            </div>
        )
    }

    renderQuestion () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        if (questions.length > 0 ) {
            let currentQuestion: QuestionModel = questions[curretQuestionIndex];
            return (
                <Grid item xs={12}>
                    <div key={curretQuestionIndex}>
                        <div className="questionNumberOfTotalNumber">
                            Spørsmål {curretQuestionIndex+1} av {questions.length}
                        </div>
                        <Question question={currentQuestion}/>
                        {this.renderButtons()}
                    </div>
                </Grid>
            )
        } else {
            return (<div/>)
        }
    }

    render() {
        const {loading} = this.props;
        const {error} = this.state;
        return (
            <div>
                <Grid container direction="row-reverse">
                    <Grid item xs={12} className="App-user-header">
                        <PresentUser/>
                    </Grid>
                </Grid>
                <Grid container className="App-content">
                    { loading ? 
                        this.renderLoading() :
                        error ? 
                        this.renderError() :
                        this.renderQuestion() 
                    }              
                </Grid>
            </div>

        );
    }
}

const mapStateToProps = state => { 
    return {
        questions: state.getQuestionsReducer.data,
        loading: state.getQuestionsReducer.loading,
    };
};

const mapDispatchToProps = { 
    getQuestionsByQuestionSetId,
    addUserAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);