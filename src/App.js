import React, {Component} from 'react';
import './App.css';
import routes from './routes.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
class App extends Component {

    render() {
      return (
      <Router>
        
        <Switch>  
          {this.showContentMenu(routes)} 
        </Switch>
      </Router>
      );

    }
    showContentMenu = (routes) =>{
        var result = null;
        if (routes.length > 0) {
          result = routes.map((route, index) =>{
            return (
                <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />
              );
          });
        }
        return result;
      }
}




export default App;