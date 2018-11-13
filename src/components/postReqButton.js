// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sendPostRequest} from '../actions/sendPostRequst';

type Props = {
    sendPostRequest(): void
};
class PostReqButton extends Component<Props> {
    
    _sendPostRequst() {
        this.props.sendPostRequest();
    }

    render() {
        return (
        <div>
            <button className="App-button" onClick={() => this._sendPostRequst()}>Send PostRequest!</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostReqButton);