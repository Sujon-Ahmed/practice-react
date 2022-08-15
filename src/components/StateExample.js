import React from "react";

class StateExample extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Sujon Ahmed Riman',
            age: ['20', '21', '22', '23', '24', '25'],
            designation: 'Web Application Developer',
            studyYear: {
                diploma: '2017-2022',
                ssc: '2017',
                jsc: '2015'
            }
        }
    }
    render() {
        return(
            <div>
                <h2>I am {this.state.name} a {this.state.designation} but i am only {this.state.age[2]}</h2>
                <p>{this.state.studyYear.diploma}</p>
            </div>
        );
    }
}

export default StateExample;