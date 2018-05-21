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
    console.log(personIndex);
    //const persons = this.state.persons.slice(); //Otra forma de copiar los elementos del state de forma segura.
    const persons = [...this.state.persons]; //De esta forma mantengo la propiedad de inmutabilidad del state.
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.togglePersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age} 
                  deletePerson={() => this.deletePersonHandler(index)} 
                  changeName={(event) => this.changeNameHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Udemy React Course</h1>
        <p className={classes.join(' ')}>Esto funciona!!</p>
        <button style={style} onClick={this.toggleButtonHandler} >Show/Hide</button>
        {persons}
      </div>
    );
  }
}

export default App;
