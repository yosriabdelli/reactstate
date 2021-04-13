import React from 'react';

import Image from "./images/John-Doe.jpg";
import Counter from "./Components/Counter"

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      fullName :"Yosri abdelli",
      bio : "I love my work",
      imgSrc :<img src= {Image} />,
      profession :"Devlopper", 
    };
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };

  render() {
    return (
      <div className="App">
        <h1>Workshop -- React State</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility} style={{display:'block',margin:'0 auto'}}>Show Profile
        </button>

        {this.state.isVisible ? <div className='colorful'>{this.state.imgSrc}<br/>{this.state.fullName}<br/>{this.state.bio}<br/>{this.state.profession}
        <Counter/>
        </div>
        : <div style={{display:'none'}}> </div>}
        
      </div>
    );
  }
}

export default App;