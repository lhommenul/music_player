import {React,useState,useEffect} from 'react'
import Result from './result/Result'
import axios from "axios"
import {EventEmitter} from "../event/index"
import { reqTitle } from "../request/req";
const Results = (props) => {
    const [list_res, setstate] = useState([]);
    useEffect(() => {
        EventEmitter.subscribe("getResultsFromTitle",async (response)=>{
            console.log(response);
            let list_data = [];
            for (let index = 0; index < response.length; index++) {
                const title = response[index];
            }
        })
    }, [])
    function requestMissingData(data_type,data) {
        switch (data_type) {
            case 'artist':
                console.log('REQUEST');
                    return reqTitle(data.name)
            default:
                console.error(`undefined data => ${data_type}`);
                break;
        }
    }
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
                {list_res?.map((e,i)=>{
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
