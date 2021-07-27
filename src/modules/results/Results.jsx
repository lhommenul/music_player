import {React,useState,useEffect} from 'react'
import Result from './result/Result'
import {EventEmitter} from "../event/index"
const Results = (props) => {
    const [list_res, setstate] = useState([]);
    useEffect(() => {
        EventEmitter.subscribe("getResultsFromApi",(response)=>{
            setstate(response);
        })
    }, [])
    return (
        <section>
            {/* MESSAGE */}
            <div>
                <h1>Aucun resultats</h1>
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
                {list_res?.data?.map((e,i)=>{
                    return <Result key={i} data={e} type={list_res?.type} index={i}></Result>
                })}
            </ul>
            {/* SPINNER LOADER */}
            <div>
                <img src="../../../téléchargement.gif" alt="spinner" />
            </div>
        </section>
    )
}

export default Results
