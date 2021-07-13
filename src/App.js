// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, this is my second edit!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";
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
