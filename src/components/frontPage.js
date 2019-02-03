// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from './counter';
import AddName from './addName';
import ListNames from './listNames';
import Grid from '@material-ui/core/Grid';

type Props = {
};

class FrontPage extends Component<Props> {

    render() {
        return (
            <div>
                <Grid container className="App-content">
                    <Counter/>
                    <AddName/>
                    <ListNames/>
                </Grid>
            </div>
        );
    }
}

export default connect(null)(FrontPage);