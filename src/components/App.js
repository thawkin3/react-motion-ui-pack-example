import React, { Component } from 'react';
import { connect } from 'react-redux';
import { spring } from 'react-motion';
import Transition from 'react-motion-ui-pack';
import * as actions from '../actions/index';
import Button from './Button';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react-motion-ui-pack example</h1>
        </header>
        <div className="App-body">
          <p className="introText">Example using transitions from the react-motion-ui-pack plugin.</p>
          <Button clickHandler={this.props.toggleDisplay} buttonText="Toggle Display" />
          <Transition
            component={false}
            enter={{
              opacity: 1,
              translateY: spring(0, {stiffness: 400, damping: 10})
            }}
            leave={{
              opacity: 0,
              translateY: 250
            }}
            runOnMount={true}
          >  
            { this.props.divIsShowing && <div key="0">This is some content in my div</div> }
          </Transition>
          <div>This is some content beneath the div that's not wrapped in a Transition component</div>
        </div>
        <div className="App-footer">
          {/* <a href="https://github.com/thawkin3/redux-example" target="_blank" rel="noopener noreferrer">https://github.com/thawkin3/redux-example</a> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps({divIsShowing}) {
    return {
        divIsShowing
    };
}

export default connect(mapStateToProps, actions)(App);
