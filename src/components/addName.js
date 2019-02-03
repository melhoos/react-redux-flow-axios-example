// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {addName} from '../actions/addName';
import {getNames} from '../actions/getNames';
import Grid from '@material-ui/core/Grid';
import '../styles/listNames.css';


type Props = {
    addName(text: string): void,
    getNames(): void
};
type State = {
    name: string
};

class AddName extends Component<Props, State> {
    constructor() {
        super();
        this.state = { // create local state for this component, because it dose not effect other components
            name: ''
        }
    }
    
    _sendPostRequst(name: string) {
        this.props.addName(name).then(() => {
            this.props.getNames();
        });
    }

    _onChangeTextInput(event: any) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        const {name} = this.state;
        return (
            <Grid item xs={12}  className="addName">
                <input className="typeNameInput" type="text" placeholder="Type a name" value={name} onChange={(event) => this._onChangeTextInput(event)}></input>
                <button className="addNameButton" onClick={() => this._sendPostRequst(name)}> 
                    <FontAwesomeIcon icon="user-plus" />
                </button>
            </Grid>
        );
    }
}

const mapDispatchToProps = { 
    addName,
    getNames
};

export default connect(null, mapDispatchToProps)(AddName);