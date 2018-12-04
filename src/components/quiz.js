// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';

type Props = {
};

class Quiz extends Component<Props> {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                dette er en ny side!
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

const mapDispatchToProps = { 

};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);