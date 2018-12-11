// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import PresentUser from './presentUser';
import '../styles/quiz.css';

type Props = {
};

class StartQuiz extends Component<Props> {

    render() {
        return (
            <div>
                <PresentUser/>
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