import React, { Component } from "react";

export class Header extends Component {
    constructor() {
        super();
        this.state={name:"Esha Jaiswal"};
    }
    ChangeName = (name) => {
        this.setState(name);
    }
    render() {
        return (
            <div>
                {/* <h2>Header</h2> */}
                <h2>Welcome Ms. {this.state.name}</h2>
            </div>
        )
    }
}

// export default Header;
//when export default it will import it in app.js by any name and without {}
// if only export Header; then it will e imported as { Header } from './Header';