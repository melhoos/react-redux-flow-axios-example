// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {AnswerAlternativeModel} from '../models/answerAlternativeModel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
    answerAlternatives: [AnswerAlternativeModel]
};

class CheckboxAlternative extends Component<Props> {

    renderCheckbox () {
        const {answerAlternatives} = this.props;
        return (
            <FormControl>
                <FormGroup>
                    {
                        answerAlternatives.map( (answerAlternative: AnswerAlternativeModel, index: number) => (
                            <FormControlLabel 
                                key={index} 
                                label={answerAlternative.name}
                                control={ 
                                    <Checkbox color="primary" />
                                }
                            />
                        ) )
                    }
                </FormGroup>
            </FormControl>
        )
    }

    render() {
        return (
            <div>
                {this.renderCheckbox()}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

export default connect(mapStateToProps)(CheckboxAlternative);