import React from 'react';
import './css/result.css';
const Result = ({artist_name,music_title,album_title}) => {
    return (
        <li className="result_container">
            <p>{artist_name}</p>
            <p>{music_title}</p>
            <p>{album_title}</p>
            <button>+</button>
        </li>
    )
}
export default Result;