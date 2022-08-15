import React from "react";

class StateExample extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Sujon Ahmed Riman',
            age: '22',
            designation: 'Web Application Developer'
        }
    }
    render() {
        return(
            <div>
                <h2>I am {this.state.name} a {this.state.designation} but i am only {this.state.age}</h2>
            </div>
        );
    }
}

export default StateExample;