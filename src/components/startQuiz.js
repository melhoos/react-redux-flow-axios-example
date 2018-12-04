// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import '../styles/quiz.css';

type Props = {
};

type State = {

}

class StartQuiz extends Component<Props, State> {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Link to="/quizzles" className="startLink">
                     <Button size="large" variant="contained" color="primary"> Start </Button>
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz);