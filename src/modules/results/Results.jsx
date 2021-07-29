import {React,useState,useEffect} from 'react'
import Result from './result/Result'
import axios from "axios"
import {EventEmitter} from "../event/index"
import { reqTitle } from "../request/req";
const Results = (props) => {
    const [list_res, setstate] = useState([]);
    useEffect(() => {
        EventEmitter.subscribe("getResultsFromTitle",async (response)=>{
            // GET THE TITLE => .title
            // GET THE ARTIST => .artist-credit[].artist.name
            // GET THE ALBUM => .releases[].title
            const total_responses = response.data.count;
            let list_recordings = response.data.recordings;
            list_recordings = list_recordings.map(res_title=>{
               return {
                title : res_title?.title,
                name : res_title['artist-credit'][0]?.artist?.name,
                album : res_title?.releases[0]?.title,
               }
            })
            setstate(list_recordings)
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
