import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import '../Header/Header';
import '../Collection/Collection';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <Route exact path="/c" component={Collection} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
