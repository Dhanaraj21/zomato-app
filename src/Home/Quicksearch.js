import React, { Component } from 'react';
import "../Style/Searchquick.css";
import Quickdisplay from './Quickdisplay';

const qurl ="http://localhost:8080/quicksearch"

class Quicksearch extends Component {

  constructor() {
    super();
    this.state = {
      mealType: "",
    };
  }

  render() {
  
    return (
      <div>
        
        <p id="quickHeading">Quick Search</p>
        <p id="quickSubheading">Discover restaurants by type of meal</p>
        <Quickdisplay mealData={this.state.mealType} />
    
      </div>
    )
  };
  componentDidMount() {
    fetch(qurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
        console.log(data);
      });
  }
}
    
  
  


export default Quicksearch