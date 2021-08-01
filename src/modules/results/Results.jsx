import './css/index.css'
import {React,useState,useEffect} from 'react'
import Result from './result/Result'
import {EventEmitter, setTotalResponse,spinnerDisplay} from "../event/index"
const Results = () => {
    const [list, setstate] = useState([]);
    useEffect(() => {
        EventEmitter.subscribe('setData',(i)=>{
            setstate(list.concat(i))
            spinnerDisplay(false)
        })
    }, [])
    return (
        <section>
            {/* MESSAGE */}
            <div>
                <div>
                    <h2 id="message_for_the_user">Aucun Resultats</h2>
                </div>
                {/* HEADER */}
                <div className="result">
                    <span>line number</span>
                    <p>Artist Name</p>
                    <p>Music Title</p>
                    <p>Album Title</p>
                    <p>Show More</p>
                </div>
            </div>
            {/* LIST ALL RESULTS */}
            <ul className="list_res">
                {list.map((e,i)=>{
                    return <Result key={i} data={e} index={i+1}></Result>
                })
                }
            </ul>
            {/* SPINNER LOADER */}
            <div>
                <img id="spin" src="../../../téléchargement.gif" alt="spinner" />
            </div>
        </section>
    )
}

export default Results
