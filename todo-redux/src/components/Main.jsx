import React from 'react';
import InfoBar from './InfoBar';
import Item from './Item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';

class Main extends React.Component {
    constructor(todos, actions) {
        super()
        this.state = {
          "filter": "全部显示"
        }

    }

    componentDidMount() {

    }
    // 过滤TODO， “全部'， ”已做“，”没做“
    changeFilter (txt) {
      this.setState({"filter": txt});
    }

    render() {
        let filterTodos = (function() {
          if(this.state.filter === "全部显示") {
            return this.props.todos
          } else if (this.state.filter === "显示已做") {
           return this.props.todos.filter((item) => {
              return item.done;
            })
          } else if (this.state.filter === "显示没做") {
            return this.props.todos.filter((item) => {
              return !item.done;
            })
          }
        }).call(this)

        return (
            <div id="Main">
                <div>{JSON.stringify(this.props.todos)}</div>
                <ul>
                    { filterTodos.map((item, index) => {
                        return <li key={index}><Item item={item} actions={this.props.actions}></Item></li>
                        })}

                </ul>
                <InfoBar todos = {this.props.todos} changeFilter={(this.changeFilter).bind(this)}></InfoBar>
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