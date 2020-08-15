import React, { useState, useEffect } from 'react';
import employees from "../../employees.json"

function Sort() {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('number');
  
    useEffect(() => {
      const sortArray = type => {
        const types = {
          number: "number"
        };
        const sortProperty = types[type];
        const sorted = [...employees].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
      };
  
      sortArray(sortType);
    }, [sortType]); 
  
    return (
      <div>
        <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="number">Phone Number</option>
        <option value="name">Name</option>
      </select>
      {data.map(employee => (
        <div key={employee.id} style={{ margin: '30px' }}>
          <div>{`Number: ${employee.number}`}</div>
          <div>{`Name: ${employee.name}`}</div>
        </div>
      ))}
      </div>
    );
  }

export default Sort;