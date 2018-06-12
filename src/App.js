import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id:'p1', name: 'Max', age: 29 },
      { id:'p2', name: 'Alex', age: 35 },
      { id:'p3', name: 'John', age: 18 }
    ],
    otherState: ' not touched ',
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  } 

  deletePersonHandler = (personIndex) => {
    // let persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  } 

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '10px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person
              key={index}
              click={()=>this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              changed={(event)=>this.nameChangeHandler(event, person.id)}/>
          })}
        </div> 
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length <=2)
      classes.push('red');
    if(this.state.persons.length <= 1)
      classes.push('bold');

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hello, I'm React App</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>
          Toggle Persons</button> 
        
          {persons}
          
      </div>
      </StyleRoot>
    );

    // return React.createElement('h1', null, 'This is React')
  }
}

export default Radium(App);
