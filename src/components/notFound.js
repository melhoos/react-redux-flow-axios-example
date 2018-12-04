// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
};

class NotFound extends Component<Props> {
    render() {
        return (
            <div>
                <div className="bigErrorText">
                    <FontAwesomeIcon icon="sad-tear" className="errorSadFaceIcon" /> Error
                </div>
                
                <div className="smallErrorText">
                    Could not connect to server.
                </div>
                <Link to="/" className="goBackLink">
                    <FontAwesomeIcon icon="hand-point-left" className="goBackHandIcon" /> Go back
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};


export default connect(mapStateToProps)(NotFound);