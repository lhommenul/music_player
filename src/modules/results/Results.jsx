import {React,useState,useEffect} from 'react'
import Result from './result/Result'
import {EventEmitter} from "../event/index"
import {reqFromApi}from "../request/req"
const Results = (props) => {
    let [list_res, setstate] = useState([]);
    useEffect(() => {
        EventEmitter.subscribe("getResultsFromApi",res=>{
            setstate( list_res = [
                'artists',
                'releases',
                'recordings',
            ]
            .map(value=>{
                if (res.data[value]!= undefined) {
                    return res.data[value];
                }   
            }))
            console.log(list_res);
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
                {list_res.map((e,i)=>{
                    console.log(e);
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
