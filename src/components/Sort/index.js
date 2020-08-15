import React, { useState, useEffect } from 'react';
import employees from "../../employees.json"
import "./style.css";

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
        <div >
            <select className="sortStyle" onChange={(e) => setSortType(e.target.value)}>
                <option value="number">Phone Number</option>
                <option value="name">Original List</option>
            </select>
            {data.map(props => (
                <div className="row">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                    <ul>
                        <li><strong>Name:</strong> {props.name}</li>
                        <li><strong>Occupation:</strong> {props.occupation}</li>
                        <li><strong>Location:</strong> {props.location}</li>
                        <li><strong>Phone Number:</strong> {props.number}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Sort;