import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons';
import ToggleButton from './components/ToggleButton';

class App extends Component {
  constructor(){
    super();
    this.state = {
      persons: [
        {id:(new Date()).getTime(), name:'Pepe', age:26},
        {id:(new Date()).getTime()+1, name:'Fede', age:27}
      ],
      togglePersons: false
    }
  }

  changeNameHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }

  toggleButtonHandler = () => {
    const doesToggle = this.state.togglePersons;
    this.setState({
      togglePersons: !doesToggle
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //Otra forma de copiar los elementos del state de forma segura.
    const persons = [...this.state.persons]; //De esta forma mantengo la propiedad de inmutabilidad del state.
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  render() {
    let persons = null;
    if(this.state.togglePersons){
      persons = <Persons 
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            changeNameHandler={this.changeNameHandler} />
    }

    return (
      <div className="App">
        <ToggleButton 
          toggleButtonHandler={this.toggleButtonHandler} 
          persons={this.state.person} />
        {persons}
      </div>
    );
  }
}

export default App;
