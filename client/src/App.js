import React from 'react';
import axios from 'axios'
import PlayerCards from './components/PlayerCards'
import './App.css';
import DarkModeButton from './components/DarkModeButton';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(response => {
      console.log(response.data)
      this.setState({
        players: response.data
      })
    })
    .catch(error => {
      console.log('whooops',error)
    })
  }

  render(){
      return (
    <div className="App">
      <DarkModeButton />
      <h1 data-testid='header'>Women's Soccer Players</h1>
      <PlayerCards players={this.state.players}/>
    </div>
  );
  }
}

export default App;
