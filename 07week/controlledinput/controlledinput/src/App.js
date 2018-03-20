import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    }
  }

handleInputChange = (e) => {
  this.setState({inputValue: e.target.value})
}


render() {
  const style = {
    margin: 12,
  };

  const RaisedButtonExampleSimple = () => (
    <div>
      <RaisedButton label="Default" style={style} />
      <RaisedButton label="Primary" primary={true} style={style} />
      <RaisedButton label="Secondary" secondary={true} style={style} />
      <RaisedButton label="Disabled" disabled={true} style={style} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} />
    </div>
  );

  return (
    <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {RaisedButtonExampleSimple()}
      </div>
    </MuiThemeProvider>
  );
}
}

export default App;
