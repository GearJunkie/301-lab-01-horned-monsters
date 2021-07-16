import React from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import SelectedBeast from './SelectedBeast.js';
import beastData from './data.json';
import './style.css';
// import BeastForm from './BeastForm.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: beastData,
      showModal: false,
      pokedBeast: {},
      formSelect: {}
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
    let formSelect = beastData.find(beast => beast.horns);
    this.setState({formSelect});
  }


  render() {
    return (
      <div className = "App">
        <Header />
        <Main
          beasts={this.state.beasts}
          displayAsModal={this.displayAsModal}/>
        <SelectedBeast
          pokedBeast={this.state.pokedBeast}
          show={this.state.showModal}
          closeModal={this.collapseModal}
        />
        {/* <BeastForm
          uponSubmit={this.handleFormSubmit}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
