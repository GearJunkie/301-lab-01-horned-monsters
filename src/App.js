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
      chosenHorns: 1
    };
  }

  displayAsModal = (name) => {
    let pokedBeast = beastData.find(beast => beast.title === name);
    this.setState({ pokedBeast, showModal: true });
  }
  collapseModal = () => {
    this.setState({ showModal: false});
  }

  filterHorns = (e) => {
    e.preventDefault();
    if (this.state.chosenHorns === 'default'){
      this.setState({beasts: beastData});
    } else {
      console.log('made to else');
      let someHorns = beastData.filter((beast) => beast.horns === parseInt(this.state.chosenHorns));
      this.setState({beasts: someHorns});
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({chosenHorns: e.target.value});
  }


  render() {
    return (
      <div className = "App">
        <Header />
        <BeastForm
          filterHorns={this.filterHorns}
          handleFormSubmit={this.handleFormSubmit}/>
        <Main
          beasts={this.state.beasts}
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
