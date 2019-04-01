import React from 'react';

class InfoBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }
    countDone() {
      let sum = 0;
      this.props.todos.forEach((item) => {
          item.done && sum++;
      })
      return sum;
    }

    render() {
        return (
            <div>
               共 {this.props.todos.length}条
               已经完成{this.countDone()} 条
               没完成{this.props.todos.length - this.countDone() } 条
              <div>
                <br/>
                <button onClick={this.props.changeFilter.bind(null,'全部显示')}>全部显示</button>
                <button onClick={this.props.changeFilter.bind(null,'显示已做')}>显示已做</button>
                <button onClick={this.props.changeFilter.bind(null,'显示没做')}>显示沒做</button>
                <br/>
              </div>

            </div>
        )
    }
}

export default InfoBar;