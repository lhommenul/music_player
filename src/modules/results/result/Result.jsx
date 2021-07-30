import { EventEmitter} from "../../event/index"
import { React,useEffect } from 'react';
import "./css/style.css"


const Result = ({index,data}) => {
    let _id = 89654;
    useEffect(() => {
        document.getElementsByClassName('btn_res')[index].addEventListener('click',e=>{
            EventEmitter.dispatch('clickButtonResult',data)
        })
    }, []);
    return (
        <li className="result">
            <span>{index}</span>
            <p>{data.name}</p>
            <p>{data.title}</p>
            <p>{data.album}</p>
            <button className="btn_res" data-id={_id} >+</button>
        </li>
    )
}

export default Result
