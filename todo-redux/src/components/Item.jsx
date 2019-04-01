import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onEdit: false
        }
    }

    componentDidMount() {

    }

    // 是否处于编辑状态返回一个文本框或者标签
    showContent () {
        if(this.state.onEdit) {
            return <input autoFocus ref="txt" type="text" onBlur={(this.bundleHandler).bind(this)}/>
        } else {
            return <b> {this.props.item.content}</b>
        }
    }
    //
    bundleHandler() {
        this.setState({
            onEdit: false
        })
        // 这里就要发送ACTRIONS
        this.props.actions.updateItem(this.refs.txt.value, this.props.item.id)
    };
    // 双击时间处理函数
    dbclickhandler () {
        this.setState({
            onEdit: true
        })
    };
    changeItem () {
        this.props.actions.changeItem(this.props.item.id)
    };
    removeItem() {
        if(confirm("确定要删除吗？")) {
            this.props.actions.removeItem(this.props.item.id)
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.props.item.done ? "checked": ""} onChange={(this.changeItem).bind(this)}/>
                <span onDoubleClick={(this.dbclickhandler).bind(this)} className={this.props.item.done ? 'done': ''}>
                    {this.showContent()}
                </span>
                <input type="button" value="x" onClick={(this.removeItem).bind(this)}/>
            </div>
        )
    }
}

export default Item;