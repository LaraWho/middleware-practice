import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state ={
      userinput: '',
      viewInput: ['']

    }
  }

doAThing = (event) => {
  if(event.charCode === 13) {
  axios.post('http://localhost:5000/api/newPost', {text: this.state.userinput})
  .then(response => {
    this.setState({
      viewInput: response.data,
      userinput: ''
    })
  }
  )
}
}

handleChange = (e) => {
  this.setState({
      userinput: e.target.value
  })
}

  render() {
    
    let list = this.state.viewInput.map((element, index) => {
      return (
          <div key={index} >
                <p>{element.text}</p>
              </div>
      )})
    return (
      <div className="App">
              <header className="App-header">
                <h1>type in me </h1> 
                <input onKeyPress={(event) => this.doAThing(event)} value={this.state.userinput} onChange={this.handleChange}></input>
                <h1>and <br/> press enter <br/> to begin middleware magic!</h1>

                { list }

          </header>

      </div>
    )
  }
}

export default App;
