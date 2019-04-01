import React from 'react';

class InfoBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
               共 {this.count}条
                怡景湾好吃呢个
            </div>
        )
    }
}

export default InfoBar;