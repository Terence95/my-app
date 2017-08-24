import React, { Component } from 'react';
import logo from '../logo.svg';
import {registerAction, loginAction} from '../redux/action/users';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from "../components/Index/Header"
import './App.css';


// let data = '123';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Header/>
        </div>
          <div className="App-body">
              <div className="welcome-view">
                  <div className="category-nav">
                      category-nav
                  </div>
                  <div className="main">
                      main
                  </div>
                  <div className="sidebar">
                      sidebar
                      <TestComponents/>
                  </div>
              </div>
          </div>
          {
              React.Children.map(this.props.children, function (child) {
                 console.log(child+'sss');
              })
          }
      </div>
    );
  }
}





export default connect(
    (state) => {
        return {users:state.users}
    },
    (dispatch) => {
        return {
            registerActions: bindActionCreators(registerAction, dispatch),
            loginAction: bindActionCreators(loginAction, dispatch),
        }
    }
)(App);

