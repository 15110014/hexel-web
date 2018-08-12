import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header';
import routes from './../../routes';
import {Switch, Route, BrowserRouter as Router, HashRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                    { /**/}
                        {this.showContentMenus(routes)}
                    </div>
                </div>
            </div>
        </HashRouter>
    );
  }
  showContentMenus = () => {
      var result ='';
      if(routes.length >0) {
          result = routes.map((route,index)=>{
                return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
          });
      }
      return (<div><Switch> {result} </Switch></div>);
  } 
}

export default App;
