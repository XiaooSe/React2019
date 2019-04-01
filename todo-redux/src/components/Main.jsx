import React from 'react';
import InfoBar from './InfoBar.jsx';
import Item from './Item.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions.js';

class Main extends React.Component {
    constructor(todos, actions) {
        super()
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="Main">
                <div>{JSON.stringify(this.props.todos)}</div>
                <ul>
                    { this.props.todos.map((item, index) => {
                        return <Item key={index} item={item} actions={this.props.actions}></Item>
                        })}

                </ul>
                <InfoBar todos = {this.props.todos}></InfoBar>
            </div>
        )
    }
}

const mapToPropsState = (state) => {
    return {
       "todos": state.todoReducer
    }
}

const mapToDisPatch = (dispatch) => {
    return {
        "actions": bindActionCreators(actions, dispatch)
    }
}
export default connect(mapToPropsState, mapToDisPatch)(Main);