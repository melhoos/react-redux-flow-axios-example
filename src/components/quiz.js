// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/getQuestions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import Question from './question';
import NotFound from './notFound'
import type {QuestionModel} from '../models/questionModel';

type State = {
    curretQuestionIndex: number,
    error: bool
}

type Props = {
    getQuestions(): void,
    questions: [QuestionModel],
    loading: bool
};

class Quiz extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            curretQuestionIndex: 0,
            error: false
        }
    }

    componentDidMount() {
        this.props.getQuestions().then((response) => {
            this.setState({
                error: response.error != undefined
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

    renderError() {
        return (
           <NotFound/>
        )
    }

    onClickNextButton () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        if (curretQuestionIndex < ( questions.length-1) ) {
            this.setState((prevState, props) => ({
                curretQuestionIndex: prevState.curretQuestionIndex + 1
            })); 
        } else {
            // TODO
        }
    }

    onClickBackButton () {
        const {curretQuestionIndex} = this.state;
        if (curretQuestionIndex > 0 ) {
            this.setState((prevState, props) => ({
                curretQuestionIndex: prevState.curretQuestionIndex - 1
            })); 
        } else {
            // TODO
        }
    }

    renderQuestion () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        return (
            <div>
                { questions.map( (question: QuestionModel, index: number) => {
                    if (index === curretQuestionIndex) {
                        return (
                            <div key={index} >
                                <Question question={question}/>
                                <span className="navButton">
                                    <Button 
                                        size="large" 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => this.onClickBackButton()}
                                        > Back 
                                    </Button>
                                </span>
                                <span className="navButton">
                                    <Button size="large" variant="contained" color="primary" onClick={() => this.onClickNextButton()}> Next </Button>
                                </span>
                            </div>
                        ) 
                    }
                })}
            </div>
        )
    }

    render() {
        const {loading} = this.props;
        const {error} = this.state;
        return (
            <div>
                { loading ? 
                    this.renderLoading() :
                    error ? 
                    this.renderError() :
                    this.renderQuestion() 
                }
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
    getQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);