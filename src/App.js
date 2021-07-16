import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import SelectedBeast from './SelectedBeast.js';
import beastData from './data.json';
import './style.css';
import BeastForm from './BeastForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: beastData,
      showModal: false,
      pokedBeast: {},
      formSelect: {},
      chosenHorns: 100
    };
  }

  displayAsModal = (name) => {
    let pokedBeast = beastData.find(beast => beast.title === name);
    this.setState({ pokedBeast, showModal: true });
  }
  collapseModal = () => {
    this.setState({ showModal: false});
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.test.value);
    this.setState({chosenHorns: parseInt(e.target.test.value)});
  }


  render() {
    let someHorns = beastData.filter((beast) => beast.horns === this.state.chosenHorns);
    return (
      <div className = "App">
        <Header />
        <BeastForm
          uponSubmit={this.handleFormSubmit}/>
        <Main
          beasts={someHorns}
          displayAsModal={this.displayAsModal}/>
        <SelectedBeast
          pokedBeast={this.state.pokedBeast}
          show={this.state.showModal}
          closeModal={this.collapseModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
