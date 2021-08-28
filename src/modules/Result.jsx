import React from 'react';
import './css/result.css';
const Result = (props) => {
    const result_data = props.result_data;
    console.log(result_data);
    return (
        <li className="result_container">
            <p>{result_data?.title}</p>
            <p>{result_data["artist-credit"][0]?.name}</p>
            <p>{result_data?.releases?.[0]?.title??"Inconnu"}</p>
            <button>+</button>
        </li>
    )
}
export default Result;