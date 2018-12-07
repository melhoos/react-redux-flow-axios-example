// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {AnswerAlternativeModel} from '../models/answerAlternativeModel';
import TextField from '@material-ui/core/TextField';

type Props = {
    answerAlternatives: [AnswerAlternativeModel]
};

class FreeTextAlternative extends Component<Props> {

    renderFreetext () {
        const {answerAlternatives} = this.props;
        let labelName
        answerAlternatives.map( (answerAlternative: AnswerAlternativeModel) => {
            if (answerAlternative.name) {
                labelName = answerAlternative.name
            } 
        })
        return (
        <div className="textFieldInput">
            <TextField
                margin="normal"
                label={labelName}
                fullWidth
            />
        </div>)
    }

    render() {
        return (
            <div>
                {this.renderFreetext()}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

export default connect(mapStateToProps)(FreeTextAlternative);