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
                <Grid item xs={12}>
                    <div className="bigErrorText"> 
                        <FontAwesomeIcon icon="sad-tear" className="errorSadFaceIcon" /> Error 
                    </div>
                    <div className="smallErrorText">
                        Could not connect to server.
                    </div>
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