// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
};

class NotFound extends Component<Props> {
    render() {
        return (
            <Grid container className="App-content">
                <Grid item xs={12} className="bigErrorText">
                    <FontAwesomeIcon icon="sad-tear" className="errorSadFaceIcon" /> Error
                </Grid>
                
                <Grid item xs={12} className="smallErrorText">
                    Could not connect to server.
                </Grid>
                <Grid item xs={12}>
                    <Link to="/" className="goBackLink">
                        <FontAwesomeIcon icon="hand-point-left" className="goBackHandIcon" /> Go back
                    </Link>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};


export default connect(mapStateToProps)(NotFound);