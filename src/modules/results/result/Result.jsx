import { EventEmitter} from "../../event/index"
import { React,useEffect } from 'react';
import "./css/style.css"


const Result = ({index,data}) => {
    useEffect(() => {
        // EventEmitter.dispatch('displayModal',true)
    }, []);
    function displayTheModal() {
        EventEmitter.dispatch('displayModal',data)
    }
    return (
        <li className="result">
            <span>{index}</span>
            <p>{data.name}</p>
            <p>{data.title}</p>
            <p>{data.album}</p>
            <button className="btn_res" onClick={displayTheModal} >+</button>
        </li>
    )
}

export default Result
