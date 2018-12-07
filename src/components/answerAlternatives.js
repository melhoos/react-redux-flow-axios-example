// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {QuestionTypeModel} from '../models/questionTypeModel';
import type {AnswerAlternativeModel} from '../models/answerAlternativeModel';
import {QuestionTypeEnum} from '../constants/questionTypeEnum';
import SliderAlternative from './sliderAlternative';
import RadioAlternative from './radioAlternative';
import FreeTextAlternative from './freeTextAlternative';
import CheckboxAlternative from './checkboxAlternative';

type Props = {
    questionType: QuestionTypeModel,
    answerAlternatives: [AnswerAlternativeModel]
};

class AnswerAlternatives extends Component<Props> {

    renderCorrectAnswerAlternative () {
        const {questionType, answerAlternatives} = this.props;
        switch(questionType.id) {
            case QuestionTypeEnum.RADIO:
                return (<RadioAlternative answerAlternatives={answerAlternatives}/> )
            case QuestionTypeEnum.CHECKBOX:
                return (<CheckboxAlternative answerAlternatives={answerAlternatives}/>)
            case QuestionTypeEnum.SLIDER:
                return (<SliderAlternative answerAlternatives={answerAlternatives}/>)
            case QuestionTypeEnum.FREETEXT: 
                return (<FreeTextAlternative answerAlternatives={answerAlternatives}/>)
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