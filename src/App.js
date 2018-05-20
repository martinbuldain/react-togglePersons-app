import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

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

  /*changeName = () => {
    let nuevaPersona = {name:'Juan', age:50};
    this.setState({
      persons: [...this.state.persons, nuevaPersona]
    });
    console.log('Se agregò la persona', nuevaPersona);
  }*/

  changeNameHandler = (e) => {
    this.setState({
      persons: [
        {name:e.target.value, age:26},
        {name:'Fede', age:27}
      ]
    });
  }

  togglePersonsHandler = () => {
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
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age} 
                  deletePerson={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Udemy React Course</h1>
        <button className='Button' onClick={this.togglePersonsHandler} >Show/Hide</button>
        {persons}
      </div>
    );
  }
}

export default App;
