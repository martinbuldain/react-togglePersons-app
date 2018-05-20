import React from 'react';
import '../css/Person.css';

class Person extends React.Component {
    render() {
        return(
            <div className="Person">
                <p onClick={this.props.deletePerson}>Mi nombre es {this.props.name}</p>
                <p>Mi edad es {this.props.age}</p>
                <input type="text" onChange={this.props.changeName} />
            </div>
        );
    }
}

export default Person;