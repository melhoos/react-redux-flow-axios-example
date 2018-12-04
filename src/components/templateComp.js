// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
};

type State = {

}

class TemplateComponent extends Component<Props, State> {

    componentDidMount() {
    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => { 
    return {
    };
};

const mapDispatchToProps = { 

};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateComponent);