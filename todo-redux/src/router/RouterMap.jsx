import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from '../components/App'
import Home from '../components/Home'

class RouterMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }
    updateHandle() {
      console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
              <Route path='/' component={App}>
             {/* <Route path='home' component={Home}/>*/}
              {/*  <Route path='detail/:id' component={Detail}/>*/}
                {/*<Route path="*" component={NotFound}/>*/}
              </Route>
            </Router>
        )
    }
}

export default RouterMap;