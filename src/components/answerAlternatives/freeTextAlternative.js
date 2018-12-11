// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {AnswerAlternativeModel} from '../models/answerAlternativeModel';
import TextField from '@material-ui/core/TextField';

type Props = {
    answerAlternatives: [AnswerAlternativeModel]
};

class FreeTextAlternative extends Component<Props> {

    render() {
        const {answerAlternatives} = this.props;
        let labelName = answerAlternatives.length > 0 ? answerAlternatives[0].Name : "";
        return (
            <div className="textFieldInput">
                <TextField
                    margin="normal"
                    label={labelName}
                    fullWidth
                />
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

export default connect(mapStateToProps)(FreeTextAlternative);