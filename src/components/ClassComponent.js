import React, { Component } from "react";

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h3>Designation: {this.props.designation}</h3>
            </div>
        );
    }
}

export default ClassComponent;