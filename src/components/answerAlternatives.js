// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionTypeModel from '../models/questionTypeModel';
import {QuestionTypeEnum} from '../constants/questionTypeEnum';
import AnswerAlternativeModel from '../models/answerAlternativeModel';
import SliderAlternative from './sliderAlternative';
import RadioAlternative from './radioAlternative';
import CheckboxAlternative from './checkboxAlternative';

type Props = {
    questionType: QuestionTypeModel,
    answerAlternatives: [AnswerAlternativeModel]
};

class AnswerAlternatives extends Component<Props> {

    renderCorrectAnswerAlternative () {
        const {questionType, answerAlternatives} = this.props;
        switch(questionType.name) {
            case QuestionTypeEnum.RADIO:
                return (<RadioAlternative answerAlternatives={answerAlternatives}/> )
            case QuestionTypeEnum.CHECKBOX:
                return (<CheckboxAlternative answerAlternatives={answerAlternatives}/>)
            case QuestionTypeEnum.SLIDER:
                return (<SliderAlternative answerAlternatives={answerAlternatives}/>)
            default: 
                break;
        }
    }

    render() {
        return (
            <div>
                {this.renderCorrectAnswerAlternative()}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

export default connect(mapStateToProps)(AnswerAlternatives);