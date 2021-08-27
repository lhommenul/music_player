import React from 'react'
import "./css/style.css";
import { EventEmitter} from "../../event/index"
import { useEffect,useState } from 'react';
import Images from "./informations/Images"
import { reqArtistById,reqAlbumById,reqTitleById,reqCoverReleaseById} from '../../request/req'

const Modal = () => {
    let modal_is_open = false;
    const [modal_data, setModalData] = useState({});
    EventEmitter.subscribe('displayModal',(modal_props_data)=>{
        setModalData({ ...modal_data, ...modal_props_data }) // set data for the modal
        setModalState() // display or dont display the modal
    });
    useEffect(() => {
        // Close Modal on button click
        document.querySelector(".modal_btn").addEventListener('click',e=>{
            setModalState()  
        })
    }, []);
    function setModalState() {
        modal_is_open = !modal_is_open;
        // Modify modal class's => display / do not display
        let i = document.querySelector("#modal_window");
        if (modal_is_open) {
            i.classList.add("modal")
            i.classList.remove("display_none")
        } else {
            i.classList.add("display_none")
        }
    }
    return (
        <div id="modal_window" className={"display_none"} tabIndex="1" aria-modal="true">
            <button className="modal_btn">x</button>
            <div className="modal_content">
                <h1>{modal_data.title}</h1>
                <h2>Informations</h2>
                <h2>Cover Arts</h2>
                <Images
                    
                >
                </Images>
            </div>
        </div>
    )
}

export default Modal
