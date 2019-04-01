import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from "../actions/actions";
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }
    add () {
        this.props.actions.addItem(this.refs.txt.value)
    }
    keydownhandler (event) {
        if( event.keyCode === 13) {
            this.add();
        }
    }

    render() {
        return (
            <div id="Header">
                待做事项: <input type="text" ref="txt" onKeyDown={(this.keydownhandler).bind(this)}/>
                <input type="button" value="添加"  onClick={(this.add).bind(this)}/>
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

export default connect(null, mapToDisPatch)(Header);