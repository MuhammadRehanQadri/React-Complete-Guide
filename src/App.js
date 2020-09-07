import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

    // This is the major change, rest is just fixing this operator wherever used and transforming class based component to functional one
    const [personsState, setPersonState] = useState({
        persons: [
            {name: 'Rehan', age: 26},
            {name: 'Rehan2', age: 27},
            {name: 'Rehan3', age: 28},
        ],
        others: 'other text'
    });

    console.log(`personState ${JSON.stringify(personsState)}`);

    const changeTextHandler = () => {
        console.log(`Hi`);;
        setPersonState({
            persons: [
                {name: 'MRQ', age: 26},
                {name: 'Rehan2', age: -1},
                {name: 'Rehan3', age: -2},
            ]
        });
        console.log(`updated personState ${JSON.stringify(personsState)}`);
    }


    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <Person />
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name}>Content inside</Person>
        <button onClick={changeTextHandler}>Change text</button>
      </div>
    );

}

export default app;
