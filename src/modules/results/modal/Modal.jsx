import React from 'react'
import "./css/style.css";
import { EventEmitter} from "../../event/index"
import { useEffect } from 'react';

const Modal = (props) => {
    let state = false;
    EventEmitter.subscribe('clickButtonResult',e=>{
        state = !state;
        setModalState()
        console.log(e);
    });
    useEffect(() => {
        setModalState()
    }, []);
    function setModalState() {
        let i = document.querySelector("#modal_window");
        if (state) {
            i.classList.add("modal")
            i.classList.remove("display_none")
        } else {
            i.classList.add("display_none")
        }
    }
    return (
        <div id="modal_window">
            <button className="modal_btn">x</button>
            <div className="modal_content">
                
            </div>
        </div>
    )
}

export default Modal
