// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions/getUser';
import type {UserModel} from '../models/userModel';
import '../styles/user.css';

type Props = {
    getUser(id:int): void;
    user: UserModel
};

type State = {

}

class PresentUser extends Component<Props, State> {

    componentDidMount() {
        let id = 1;
        this.props.getUser(id);
    }

    render() {
        const {user} = this.props;
        return (
            <div className="presentUser">
                <div>
                    {'Hei ' + user.Name}
                </div>
                
                <div className="logout">
                    Logg ut
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
        user: state.getUserReducer.data
    };
};

const mapDispatchToProps = { 
    getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(PresentUser);