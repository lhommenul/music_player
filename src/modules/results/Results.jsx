import {React,useState,useEffect} from 'react'
import Result from './result/Result'
import {EventEmitter} from "../event/index"
const Results = () => {
    const [list, setstate] = useState([]);
    // 0 =  title, 1 = artist, album = 2
    useEffect(() => {
        EventEmitter.subscribe('setData',(i)=>{
            console.log(i);
            setstate(list.concat(i))
            console.log(list);
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
                {list.map((e,i)=>{
                    return <Result key={i} data={e} index={i}></Result>
                })
                }
            </ul>
            {/* SPINNER LOADER */}
            <div>
                <img src="../../../téléchargement.gif" alt="spinner" />
            </div>
        </section>
    )
}

export default Results
