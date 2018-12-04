// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getNames} from '../actions/getNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/listNames.css';
import {removeName} from '../actions/removeName';

type Props = {
    getNames(): void,
    names: [string],
    removeName(id: number): void
};

class ListNames extends Component<Props> {

    componentDidMount() {
        this.props.getNames();
    }

    _onTrashClick(id: number) {
        this.props.removeName(id).then(() => {
            this.props.getNames();
        });
    }

    render() {
        const {names} = this.props;
        return (
            <ul className="listNamesScroll">
                {names.map( (name: any) => (
                              <li key={name.id} className="nameListItem">
                                  {name.name}
                                  <FontAwesomeIcon icon="trash-alt" className="trashIcon" onClick={() => this._onTrashClick(name.id)} />
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
    getNames,
    removeName
};

export default connect(mapStateToProps, mapDispatchToProps)(ListNames);