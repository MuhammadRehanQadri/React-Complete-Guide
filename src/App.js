import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: 'Rehan', age: 26},
            {name: 'Rehan2', age: 27},
            {name: 'Rehan3', age: 28},
        ]
    }

    changeTextHandler = () => {
        console.log(`Hi`);;
        this.setState({
            persons: [
                {name: 'MRQ', age: 26},
                {name: 'Rehan2', age: -1},
                {name: 'Rehan3', age: -2},
            ]
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <Person />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name}>Content inside</Person>
        <button onClick={this.changeTextHandler}>Change text</button>
      </div>
    );
  }
}

export default App;
