import React from 'react'
import "./css/style.css";
import { EventEmitter} from "../../event/index"
import { useState,useEffect } from 'react';
import { reqArtistById } from "../../request/req";
import Images from "./informations/Images"
import Artists from "./informations/Artists"

const Modal = () => {
    let modal_is_open = false;
    const [modal_data, setModalData] = useState({});
    EventEmitter.subscribe('displayModal',(modal_props_data)=>{
        setModalState() // display or dont display the modal
        setModalData({ ...modal_data, ...modal_props_data }) // set data for the modal
        document.querySelector(".modal_btn").addEventListener('click',()=>{
            setModalState(); // open or close the modal
        })
    });
    useEffect(() => {
        // console.log(modal_data);
        if (Object.keys(modal_data).length !== 0) {
            reqArtistById(modal_data.data.id) 
            .then(artist_info=>{
                console.log(modal_data);
                setModalData({ ...modal_data, ...artist_info.data }) // set data for the modal
            })
            .catch(err=>{
                console.error(err);
            })
        }
    }, [modal_data]);
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
                <h1>Titre</h1>
                <h2>{modal_data?.title}</h2>
                <hr />
                <h2>Artists</h2>
                <Artists
                    artists={modal_data['artist-credit']}
                >
                </Artists>
                <hr />
                <h2>Informations</h2>
                <hr />
                <h2>Note</h2>
                <h3>{modal_data?.rating?.value??"5"} / 5</h3>
                <hr />
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
