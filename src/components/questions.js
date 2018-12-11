// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuestionsByQuestionSetId} from '../actions/getQuestions';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import Question from './question';
import Grid from '@material-ui/core/Grid';
import type {QuestionModel} from '../models/questionModel';

type State = {
    curretQuestionIndex: number,
    error: bool
}

type Props = {
    getQuestionsByQuestionSetId(id: number): void,
    questions: [QuestionModel],
    loading: bool
};

class Questions extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            curretQuestionIndex: 0,
            error: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.qsId
        this.props.getQuestionsByQuestionSetId(id).then((response) => {
            this.setState({
                error: response.error !== undefined
            })
          })
    }

    renderLoading () {
        return (
            <Grid item xs={12}>
                <FontAwesomeIcon className="quiz-loader" icon="spinner" />
            </Grid>
        )
    }

    renderError () {
        return (
            <Redirect to="/notFound" /> 
        )
    }

    onClickNextButton () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        if (curretQuestionIndex < ( questions.length-1) ) {
            this.setState((prevState, props) => ({
                curretQuestionIndex: prevState.curretQuestionIndex + 1
            })); 
        } else {
            // TODO
        }
    }

    onClickBackButton () {
        const {curretQuestionIndex} = this.state;
        if (curretQuestionIndex > 0 ) {
            this.setState((prevState, props) => ({
                curretQuestionIndex: prevState.curretQuestionIndex - 1
            })); 
        } else {
            // TODO
        }
    }

    renderQuestion () {
        const {questions} = this.props;
        const {curretQuestionIndex} = this.state;
        return (
            <Grid item xs={12}>
                { questions.map( (question: QuestionModel, index: number) => {
                    if (index === curretQuestionIndex) {
                        return (
                            <div key={index} >
                                <Question question={question}/>
                                <span className="navButton">
                                    <Button 
                                        size="large" 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => this.onClickBackButton()}
                                        > Back 
                                    </Button>
                                </span>
                                <span className="navButton">
                                    <Button size="large" variant="contained" color="primary" onClick={() => this.onClickNextButton()}> Next </Button>
                                </span>
                            </div>
                        ) 
                    }
                })}
            </Grid>
        )
    }

    render() {
        const {loading} = this.props;
        const {error} = this.state;
        return (
            <Grid container className="App-content">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Grid container>
                        { loading ? 
                            this.renderLoading() :
                            error ? 
                            this.renderError() :
                            this.renderQuestion() 
                        }
                    </Grid>                
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>


        );
    }
}

const mapStateToProps = state => { 
    return {
        questions: state.getQuestionsReducer.data,
        loading: state.getQuestionsReducer.loading,
    };
};

const mapDispatchToProps = { 
    getQuestionsByQuestionSetId
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);