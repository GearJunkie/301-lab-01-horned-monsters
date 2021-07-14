import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className = "app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
