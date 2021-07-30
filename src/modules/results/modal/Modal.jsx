import React from 'react'
import "./css/style.css";
import { EventEmitter} from "../../event/index"
import { useEffect,useState } from 'react';

const Modal = () => {
    let modal_is_open = false;
    const [modal_data, setModal] = useState({});
    EventEmitter.subscribe('clickButtonResult',(modal_props_data)=>{
        modal_is_open = !modal_is_open;
        setModal({ ...modal_data, ...modal_props_data })
        setModalState()
    });
    useEffect(() => {
        setModalState()
        // Close Modal on button click
        document.querySelector(".modal_btn").addEventListener('click',e=>{
            modal_is_open = !modal_is_open;
            setModalState()  
        })
    }, []);
    function setModalState() {
        let i = document.querySelector("#modal_window");
        if (modal_is_open) {
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
                <h1>{modal_data.title}</h1>

            </div>
        </div>
    )
}

export default Modal
