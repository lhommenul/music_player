import { EventEmitter} from "../../event/index"
import { React,useEffect } from 'react';

import "./css/style.css"


const Result = ({index,data,type}) => {
    let _id = 89654;
    useEffect(() => {
        document.getElementsByClassName('btn_res')[index].addEventListener('click',e=>{
            EventEmitter.dispatch('clickButtonResult',e)
        })
        requestMissingData(type)
    }, []);
    function requestMissingData(data_type) {
        switch (data_type) {
            case 'artist':
                console.log("artist");
                break;
        
            default:
                console.error(`undefined data => ${data_type}`);
                break;
        }
    }
    return (
        <li className="result">
            <span>{index}</span>
            <p>{data.name}</p>
            <p>Title</p>
            <p>Album</p>
            <button className="btn_res" data-id={_id} >+</button>
        </li>
    )
}

export default Result
