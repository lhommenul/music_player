import React from 'react';
import './css/result.css';
const Result = (props) => {
    const result_data = props.result_data;
    return (
        <li className="result_container">
            <p>{result_data?.title??"Inconnu"}</p>
            <p>{result_data["artist-credit"][0]?.name??"Inconnu"}</p>
            <p>{result_data?.releases?.[0]?.title??"Inconnu"}</p>
            <button>+</button>
        </li>
    )
}
export default Result;