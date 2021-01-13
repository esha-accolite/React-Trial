import React, { Component } from "react";

export class Input extends Component {
    constructor() {
        super();
    }

    ChangeName = (event) =>{
        this.props.handleOnChange(event.target.value);
    };

    render() {
        // console.log(this.props.onChange);
        return (
            <div>
                 {/* <h2>Header2</h2>  */}
                <input placeholder="input" onChange={this.ChangeName}/> 
            </div>
        )
    }
}

// export default Input;
//when export default it will import it in app.js by any name and without {}
// if only export Header; then it will e imported as { Header } from './Header';