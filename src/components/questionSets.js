// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuestionSets} from '../actions/getQuestionSets';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../styles/quiz.css';

type Props = {
    getQuestionSets(): void;
    questionSets: [Object]
};

class QuestionSets extends Component<Props> {

    componentDidMount() {
        this.props.getQuestionSets();
    }

    renderQuestionSets() {
        const {questionSets} = this.props;
        return questionSets.map( (questionSet: obj, index: Number) => {
            return index < 3 ? (
                <Grid item xs={4} key={index} zeroMinWidth>
                    <Link to={"/quizzles/"+questionSet.Id} className="startLink">
                        <Button size="large" variant="outlined"> {questionSet.Name} </Button>
                    </Link>
                </Grid>
            ) : (<div key={index}></div>) 
        })
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Grid container spacing={16}>
                        {this.renderQuestionSets()}
                    </Grid>                
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => { 
    return {
        questionSets: state.getQuestionSetsReducer.data
    };
};

const mapDispatchToProps = { 
    getQuestionSets
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSets);