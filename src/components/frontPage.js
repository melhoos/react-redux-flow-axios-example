// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from './xcounter';
import AddName from './xaddName';
import ListNames from './xlistNames';
import Grid from '@material-ui/core/Grid';

type Props = {
};

class FrontPage extends Component<Props> {

    render() {
        return (
            <div>
                <Grid container direction="row-reverse">
                    <Grid item xs={12} className="App-content">
                        <Counter/>
                        <AddName/>
                        <ListNames/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(null)(FrontPage);