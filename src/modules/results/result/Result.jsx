
import React from 'react'
import { useEffect } from 'react';
import "./css/style.css"
const Result = (props) => {
    let nb = props.index;
    let _id = 89654;
    useEffect(() => {

    }, []);
    return (
        <li className="result">
            <span>{nb}</span>
            <p>Artist</p>
            <p>Title</p>
            <p>Album</p>
            <button className="btn_res" data-id={_id} >+</button>
        </li>
    )
}

export default Result
