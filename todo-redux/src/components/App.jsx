import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="App">
                <h1>大家好</h1>
                <Header></Header>
                <Main></Main>
            </div>
        )
    }
}

export default App;