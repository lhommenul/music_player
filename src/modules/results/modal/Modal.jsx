import React from 'react'
import "./css/style.css";
import { useEffect } from 'react';
import { store } from '../../store';
const Modal = (props) => {
    let nam;
    useEffect(() => {
        let l = document.querySelectorAll(".btn_res")
        l.forEach(e=>{
            e.addEventListener("click",(e)=>{
                let d = e.target.dataset.id // get the element id to load more data
                if (store.modalState) {
                    store.modalState = false
                } else {
                    store.modalState = true
                }
                nam =  store.modalState?"modal":"display_none"
            })
        })
    }, []);
    return (
        <div className="modal">
            
        </div>
    )
}

export default Modal
