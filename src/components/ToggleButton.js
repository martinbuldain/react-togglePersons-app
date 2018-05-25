import React from 'react';

const toggleButton = (props) => {
    return(
        <div>
            <h1>Udemy React Course</h1>
            <p>Esto funciona!!</p>
            <button onClick={props.toggleButtonHandler} >Show/Hide</button>
        </div>
    );
}

export default toggleButton;