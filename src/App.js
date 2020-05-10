import React from 'react';
import logo from './logo.svg';
import './App.css';
import taris from './data.js';
import Divone from './components/Divone.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        caps: ''
    }
  }
  render(){
    return (
      <div>
        <header className="App-header">
            <Divone />
        </header>
      </div>
    );
  }
}

export default App;
