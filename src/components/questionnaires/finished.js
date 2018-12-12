// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
};

type State = {

}

class Finished extends Component<Props, State> {

    componentDidMount() {
    }

    render() {
        return (
            <Grid container className="App-content">
                <Grid item xs={12}>
                    <div>
                        Bra jobba! 
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

const mapDispatchToProps = { 

};

export default connect(mapStateToProps, mapDispatchToProps)(Finished);