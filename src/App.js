import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Alex', age: 35 },
      { name: 'Joh ', age: 18 }
    ],
    otherState: ' not touched '
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Alex', age: 35 },
        { name: 'Joh ', age: 30 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29 },
        { name: event.target.value, age: 35 },
        { name: 'Joh ', age: 30 }
      ]
    })
  } 

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hello, I'm React App</h1>
        <p>This is working</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> 
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My Hobbies : Racing</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Raj')}
          change={this.nameChangeHandler}
          />
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement('h1', null, 'This is React')
  }
}

export default App;
