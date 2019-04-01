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
                <Header></Header>
                <Main></Main>
            </div>
        )
    }
}

export default App;