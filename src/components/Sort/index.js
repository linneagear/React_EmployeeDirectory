import React, { useState, useEffect } from 'react';
import employees from "../../employees.json";

function Sort() {
    // store value of the sort property, which will be "name" for now, by default
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState("name");

    // add useEffect hook which will sort and render every time on update of the "name"/sortType value
    useEffect(() => {
        const sortArray = type => {
            // set types we want to sort through
            const types = {
                name: "name",
                occupation: "occupation",
                location: "location"
            };
            const sortProperty = types[type];
            const sorted = [...employees].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
        };

        sortArray(sortType);
    }, [sortType]
    );

    return (
        <div>
            {/* update the value of the sortType on select option change */}
            <select onChange={(event) => setSortType(event.target.value)}>
                <option value="name">Name</option>
                <option value="occupation">Occupation</option>
                <option value="location">Located in</option>
            </select>
        </div>
    );

}

export default Sort;