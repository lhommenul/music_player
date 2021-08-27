import React from 'react'
import "./css/style.css";
import { EventEmitter} from "../../event/index"
import { useState } from 'react';
import Images from "./informations/Images"

const Modal = () => {
    let modal_is_open = false;
    const [modal_data, setModalData] = useState({});
    EventEmitter.subscribe('displayModal',(modal_props_data)=>{
        setModalData({ ...modal_data, ...modal_props_data }) // set data for the modal
        setModalState() // display or dont display the modal
        document.querySelector(".modal_btn").addEventListener('click',()=>{
            setModalState(); // open or close the modal
        })
    });
    function setModalState() {
        // open or close the modal
        modal_is_open = !modal_is_open;
        const modal_window = document.querySelector("#modal_window");
        if (modal_is_open) {
            modal_window.classList.add("modal")
            modal_window.classList.remove("display_none")
            document.addEventListener("keydown",e=>{
                //close modal
                if (e.key === "Escape" && modal_is_open) setModalState();
            })
        } else {
            setModalData({})
            modal_window.classList.add("display_none")
        }
    }
    return (
        <div id="modal_window" className={"display_none"} tabIndex="1" aria-modal="true">
            <button className="modal_btn">x</button>
            <div className="modal_content">
                <h1>{modal_data?.title}</h1>
                {console.log(modal_data)}
                <h2>Informations</h2>
                <h2>Cover Arts</h2>
                <Images
                    images={modal_data?.release}
                >
                </Images>
            </div>
        </div>
    )
}

export default Modal
