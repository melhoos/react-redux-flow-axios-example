// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCounter} from '../actions/incrementCounter';
import {deincrementCounter} from '../actions/deincrementCounter';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/counter.css';

type Props = {
    counter: any,
    incrementCounter(): void,
    deincrementCounter(): void
};
class Counter extends Component<Props> {
    _pressIncrementCounter(): void {
        this.props.incrementCounter();
    }

    _pressDeincrementCounter(): void {
        this.props.deincrementCounter();
    }

    render() {
        const {counter} = this.props;
        return (
        <Grid item xs={12} className="counter">
            <div className="counter-value">Count: {counter}</div>
            <button className="counter-button minus" onClick={() => this._pressDeincrementCounter()}>  <FontAwesomeIcon icon="minus" /> </button>
            <button className="counter-button plus" onClick={() => this._pressIncrementCounter()}> <FontAwesomeIcon icon="plus" /> </button>
        </Grid>
        );
    }
}

const mapStateToProps = state => { // map the stored state to props
    return {
        counter: state.countReducer.count
    };
};

const mapDispatchToProps = { 
    incrementCounter,
    deincrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);