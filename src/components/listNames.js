// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNames} from '../actions/getNames';

type Props = {
    getNames(): void,
    names: [string]
};

class ListNames extends Component<Props> {

    componentDidMount() {
        this.props.getNames();
    }

    render() {
        const {names} = this.props;
        return (
            <ul>
                {names.map( (name: any) => (
                              <li key={name.id}>
                                  {name.name}
                              </li>      
                    )
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => { // map the stored state to props
    return {
        names: state.getNamesReducer.data
    };
};

const mapDispatchToProps = { 
    getNames
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNames);