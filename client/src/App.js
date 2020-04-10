import React from 'react';
import axios from 'axios'
import PlayerCards from './components/PlayerCards'
import './App.css';

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
      <PlayerCards players={this.state.players}/>
    </div>
  );
  }
}

export default App;
