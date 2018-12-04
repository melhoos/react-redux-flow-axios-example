// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from './counter';
import AddName from './addName';
import ListNames from './listNames';

type Props = {
};

class FrontPage extends Component<Props> {

    render() {
        return (
            <div>
                <Counter/>
                <AddName/>
                <ListNames/>
            </div>
        );
    }
}

export default connect(null)(FrontPage);