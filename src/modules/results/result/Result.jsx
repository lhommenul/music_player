import { EventEmitter} from "../../event/index"
import React from 'react'
import { useEffect } from 'react';
import "./css/style.css"

// "artist-credit": Array [ {…} ]
// ​​​
// barcode: "8731889474720"
// ​​​
// count: 1
// ​​​
// country: "GB"
// ​​​
// date: "1986"
// ​​​
// id: "2c999811-bc3a-3033-8b6d-cf24c415e269"
// ​​​
// "label-info": Array [ {…} ]
// ​​​
// media: Array [ {…} ]
// ​​​
// "release-events": Array [ {…} ]
// ​​​
// "release-group": Object { id: "88908f6d-002d-3dcc-aa55-1aa8a90fecad", "type-id": "dd2a21e1-0c00-3729-a7a0-de60b84eb5d1", "primary-type-id": "f529b476-6e62-324f-b0aa-1f3e33d313fc", … }
// ​​​
// score: 100
// ​​​
// status: "Official"
// ​​​
// "status-id": "4e304316-386d-3409-af2e-78857eec5cfe"
// ​​​
// "text-representation": Object { language: "eng", script: "Latn" }
// ​​​
// title: "Daft"
// ​​​
// "track-count": 16


const Result = (props) => {
    let nb = props.index;
    let data = props.data;
    let _id = 89654;
    useEffect(() => {
        document.getElementsByClassName('btn_res')[props.index].addEventListener('click',e=>{
            EventEmitter.dispatch('clickButtonResult',e)
        })
    }, []);
    return (
        <li className="result">
            <span>{nb}</span>
            <p>{data.name}</p>
            <p>Title</p>
            <p>Album</p>
            <button className="btn_res" data-id={_id} >+</button>
        </li>
    )
}

export default Result
