import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Header } from "./Header";
import { Input } from "./input";

class App extends Component {
  constructor(){
    super();
    this.state = {
      name : "Esha",
      copyrightYear : 2003,
    };
    // this.ChangeName = this.ChangeName.bind(this);
  }
  // setTimeout(() => {
  //   console.log("logger");
  //   this.setState({name: "Accolite", copyrightYear : 2003});
  // }, 3000);

  ChangeName = (nm) =>{
      // console.log(this.name);
      // console.log("this has changed");
      // this.setState({...this.state,name: "Accolite Digital", copyrightYear : 2003},() =>{
        // console.log(this.state.name);
      // });
      console.log(nm);
      this.setState({name: "Accolite Digital", copyrightYear : 2003},() =>{
        console.log(this.state.name);
      });
      console.log(this.state.name);
  };


  componentDidMount() {}

  render() {
    
    

    // let name = "Accolite";

    return  (
    // <h1>
    //   Hello World!
    //   <React.Fragment>
    //   {this.state.name}
    //   </React.Fragment>
    // </h1>
  
    // <React.Fragment>
    //   <h1>
    //     Hello World! 
    //     {this.state.name}
    //   </h1>
    //   <h2>
    //     {this.state.copyrightYear}
    //   </h2>
    //   <h2>
    //     <button onClick={this.ChangeName}>change</button>
    //   </h2>
    // </React.Fragment>
    
    // );
    <React.Fragment>
      <Header />
      <Input handleOnChange={this.ChangeName} defaultName="defaultname"/>
    </React.Fragment>
    );
  }

  shouldComponentUpdate () {
    // return false; //it will specify that component will never be updated
    return true;
  }
  componentDidUpdate() {}
  // render()
  componentWillUnmount () {}

}
export default App;






// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Accolite",
//       copyrightYear: 2009,
//     };
//     this.changeName = this.changeName.bind(this);
//   }
//   changeName(event) {
//     this.setState({name: "AccoliteDigital"}, ()  => {
//           console.log(this.state.name);
//     });
//     console.log(this.state.name);
//     console.log("called changeName()", event);
//   };


// https://pastebin.com/raw/XERBdp2a