import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
// import SelectedBeast from './SelectedBeast.js';
import './style.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  state() {
    
  }

  render() {
    return (
      <div className = "app">
        <Header />
        <Main data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}



export default App;
