// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionModel from '../models/questionModel';
import AnswerAlternatives from './answerAlternatives';

type Props = {
    question: QuestionModel
};

class Question extends Component<Props> {

    render() {
        const {question} = this.props;
        return (
            <div className="questionComp">
                <div className="questionTitle">{question.questionText}</div>
                <AnswerAlternatives questionType={question.questionType} answerAlternatives={question.answerAlternatives}/>
            </div>
            
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

const mapDispatchToProps = { 

};

export default connect(mapStateToProps, mapDispatchToProps)(Question);