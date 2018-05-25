import React from 'react';
import '../css/Person.css';

const person = (props) => {
    return(
        <div className="Person">
            <p onClick={props.deletePerson}>Mi nombre es {props.name}</p>
            <p>Mi edad es {props.age}</p>
            <input type="text" onChange={props.changeName} />
        </div>
    );
}

export default person;