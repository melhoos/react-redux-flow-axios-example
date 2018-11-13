// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCounter} from '../actions/incrementCounter';
import {deincrementCounter} from '../actions/deincrementCounter';
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
        <div className="counter">
            <div className="counter-value">Count: {counter}</div>
            <button className="App-button" onClick={() => this._pressDeincrementCounter()}>-</button>
            <button className="App-button" onClick={() => this._pressIncrementCounter()}>+</button>
        </div>
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