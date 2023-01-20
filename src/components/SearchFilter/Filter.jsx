import React from "react";
import { useState } from "react";

const Filter = () => {
    const list = [
        'PHP',
        'ReactJs',
        'JavaScript',
        'ES6',
        'Yii2',
        'Codeignitor'
    ];
    const [data, setData] = useState(list);

    const searchData = (e) => {
        // console.log(e.target.value);
        let searchKey = e.target.value;
        if(searchKey === ""){
            setData(list);
            return;
        }

        const filtredData = list.filter(
            (d) => d.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1
        );
        setData(filtredData);
    }

    
    return (
        <div>
            <h1>Search Filter</h1>
            <label>Search Product: </label>
            <input type="text" onChange={searchData} id="search_filter" />
            {
                (data && data.map((item) => {
                   return (<div key={item}>{item}</div>)
                }))
            }
            {
                (data.length === 0 && <div>No result Found.</div>)
            }
        </div>
    )
}

export default Filter;