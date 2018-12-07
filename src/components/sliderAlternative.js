// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import type {AnswerAlternativeModel} from '../models/answerAlternativeModel';
import Slider from '@material-ui/lab/Slider';

type State = {
    sliderValue: number,
}

type Props = {
    answerAlternatives: [AnswerAlternativeModel]
};

class SliderAlternative extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 0
        }
    }

    handleSliderChange = (event, value) => {
        this.setState({ sliderValue: value });
    };

    renderSlider () {
        const {answerAlternatives} = this.props;
        const {sliderValue} = this.state;
        let rangeHigh, rangeLow
        let showSlider = false
        answerAlternatives.map( (answerAlternative: AnswerAlternativeModel) => {
            if (answerAlternative.answerRange) {
                rangeHigh = answerAlternative.answerRange.fields[0].answerRangeHigh; // FIX THIS IN BACKEND
                rangeLow = answerAlternative.answerRange.fields[0].answerRangeLow; // FIX THIS IN BACKEND
                showSlider = true;
            } 
        })
        return (
            <div>
                { showSlider ? (
                        <div className="sliderContent">
                            <div className="sliderValues">
                                <span className="sliderLow"> {rangeLow} </span>
                                <span> {sliderValue} </span>
                                <span className="sliderHigh"> {rangeHigh} </span>
                            </div>
                            <Slider
                                value={sliderValue}
                                min={rangeLow}
                                max={rangeHigh}
                                step={1}
                                onChange={this.handleSliderChange}
                            />
                        </div>
                    ) : (<div> Error! QuestionType = Slider, men ingen range funnet! </div>)
                }
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderSlider()}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

export default connect(mapStateToProps)(SliderAlternative);