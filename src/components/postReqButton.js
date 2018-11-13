// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendPostRequest} from '../actions/sendPostRequst';

type Props = {
    sendPostRequest(text: string): void
};
type State = {
    textValue: string
};

class TextInput extends Component<Props, State> {
    constructor() {
        super();
        this.state = { // create local state for this component, because it dose not effect other components
            textValue: ''
        }
    }
    
    _sendPostRequst(text: string) {
        this.props.sendPostRequest(text);
    }

    _onChangeTextInput(event: any) {
        this.setState({
            textValue: event.target.value
        });
    }

    render() {
        const {textValue} = this.state;
        return (
            <div>
                <input className="App-inputField" type="text" placeholder="Type a name" value={textValue} onChange={(event) => this._onChangeTextInput(event)}></input>
                <button className="App-button" onClick={() => this._sendPostRequst(textValue)}>Send!</button>
            </div>
        );
    }
}

const mapStateToProps = state => { // map the stored state to props
    return {

    };
};

const mapDispatchToProps = { 
    sendPostRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);