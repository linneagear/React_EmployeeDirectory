// import necessary files
import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import Sort from "./components/Sort"
import employees from "./employees.json";

class App extends Component {

  constructor() {
    super();

    // set initial state to an empty string
    this.state = { 
      employees: [], 
      search: '' 
    };
  }

  // capture the "event" of the search box on change and set the value equal to the state variable
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }


  render() {

    // filter employees data based on the search variable which includes what is in this.state.search
    const items = employees.filter((data) => {
      if (this.state.search == null)
        return data
      else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.location.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.occupation.toLowerCase().includes(this.state.search.toLowerCase())) {
        return data
      }
      // feeds the above data to the map function
    }).map(employee => {
      return (
        <Wrapper>
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
            number={employee.number}
          />
        </Wrapper>
      )
    })

    return (
      <div>
        <Title>Employee Directory</Title>
        <div>
          <Sort />
        </div>
        <input type="text" placeholder="Enter item to be searched" onChange={(e) => this.searchSpace(e)} />
        {items}
      </div>
    )
  }
}

export default App;