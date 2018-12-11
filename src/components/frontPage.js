// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PresentUser from './presentUser';
import QuestionSets from './questionnaires/questionSets';
import Grid from '@material-ui/core/Grid';

type Props = {
};

class FrontPage extends Component<Props> {

    render() {
        return (
            <div>
                <Grid container direction="row-reverse">
                    <Grid item xs={12} className="App-user-header">
                        <PresentUser/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} className="App-content">
                        <QuestionSets/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default connect(null)(FrontPage);