import React from 'react';
import Person from './Person';

const persons = (props) => props.persons.map((person, index) => {
    return(
        <Person
            key={person.id}
            name={person.name} 
            age={person.age} 
            deletePerson={() => props.deletePersonHandler(index)} 
            changeName={(event) => props.changeNameHandler(event, person.id)}
        />
        )
});

export default persons;