// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/getQuestions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import Question from './question';

type State = {
    curretQuestionIndex: int
}

type Props = {
    getQuestions(): void,
    questions: [obj],
    loading: bool
};

class Quiz extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            curretQuestionIndex: 0
        }
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    renderloading () {
        return (
            <FontAwesomeIcon className="quiz-loader" icon="spinner" />
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
                { questions.map( (question: obj, index: int) => {
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
        const {questions, loading} = this.props;
        return (
            <div>
                { loading ? 
                    this.renderloading() : this.renderQuestion() }
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
        questions: state.getQuestionsReducer.data,
        loading: state.getQuestionsReducer.loading
    };
};

const mapDispatchToProps = { 
    getQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);