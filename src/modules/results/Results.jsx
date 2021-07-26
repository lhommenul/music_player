import {React,useState} from 'react'
import Result from './result/Result'
import {EventEmitter} from "../event/index"
const Results = (props) => {
    const [list_res, setstate] = useState([]);
    EventEmitter.subscribe("getResultsFromApi",(data)=>{
        setstate(data[0].data[data[1]]);
    })
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
                {list_res.map((e,i)=>{
                    return <Result key={i} data={e} index={i}></Result>
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
