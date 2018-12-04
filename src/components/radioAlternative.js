// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AnswerAlternativeModel from '../models/answerAlternativeModel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

type State = {
    radioValue: string
}

type Props = {
    answerAlternatives: [AnswerAlternativeModel]
};

class RadioAlternative extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: '0'
        }
    }
    componentDidMount() {
    }

    handleRadioChange = event => {
        this.setState({ radioValue: event.target.value });
    };

    renderRadio () {
        const {answerAlternatives} = this.props;
        const {radioValue} = this.state;
        return (
            <FormControl>
                <RadioGroup
                    onChange={this.handleRadioChange}
                    value={radioValue}
                >
                    {
                        answerAlternatives.map( (answerAlternative: AnswerAlternativeModel, index: int) => (
                            <FormControlLabel 
                                key={index} 
                                value={index.toString()}
                                label={answerAlternative.name}
                                control={ 
                                    <Radio color="primary" />
                                }
                            />
                        ) )
                    }
                </RadioGroup>
            </FormControl>
        )
    }

    render() {
        return (
            <div>
                {this.renderRadio()}
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

export default connect(mapStateToProps, mapDispatchToProps)(RadioAlternative);