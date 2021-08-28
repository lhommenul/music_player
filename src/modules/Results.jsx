import {React,useEffect,useState} from 'react'
import Result from "./Result";
import {reqArtist,reqAlbum,reqTitle} from "../utils/requests";
import './css/results.css';
const Results = (props) => {
    const [results, setResults] = useState([]);
    const [total_count, setTotalCount] = useState(0);
    let limit = 50, offset = 0,data_is_loaded = false;
    useEffect(() => {
        if (props.search_data.reset) {
            console.log("reset");
            props.search_data.reset = false;
            props.set_search_data(props.search_data);
            start();
        }
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && data_is_loaded && results.length <= total_count) {
                data_is_loaded = false;
                offset += 50;
                start();
            }
        };
    }, [props]);
    function start() {
        if (props.search_data.value) { // there is values
            getDataFromApi(props.search_data)
            .then(response=>{
                if (Array.isArray(response)) {// is an array
                    let total = response.reduce((accumulator,current_value)=>{
                        accumulator.count += current_value.data.count;
                        accumulator.recordings = accumulator.recordings.concat(current_value.data.recordings);
                        return accumulator;
                    },{count:0,recordings:[]})
                    console.log(total);
                    setTotalCount(total.count)
                    setResults(results=>results.concat(total.recordings));   
                } else {// if not an array
                    setTotalCount(response.data.count)
                    setResults(results=>results.concat(response.data.recordings));   
                }
                data_is_loaded = true;
            })
            .catch(err=>{
                console.error(err);
            })
        }
        function getDataFromApi(seach_data) {
            const normalise_object ={
                search_inp:seach_data.value,
                limit:limit,
                offset:offset
            }; 
            switch (seach_data.type) {
                case "0": // Title
                    return reqTitle(normalise_object);
                    case "1": // Album 
                        console.log("request album");
                        return reqAlbum(normalise_object);
                        case "2": // Artist
                            console.log("request artist");
                            return reqArtist(normalise_object);
                            case "3": // Everything
                                return Promise.all([reqArtist(normalise_object),reqTitle(normalise_object),reqAlbum(normalise_object)])                                                   
                default:
                    console.error("type undefined");
                    break;
            }
        }
    }
    return (
        <ul className="list_container_results">
            {!props.search_data.value && // If no Results 
                <li className="total_count">
                    Aucun Resultats
                </li>
            }
            {props.search_data.value && results&&
                <li className="total_count">
                    Nombre Total de Reponses : {total_count}
                </li>
            }            
            {props.search_data.value && results&& // if there is results
                results.map((result,index)=>{
                    return <Result
                        result_data={result}
                    ></Result>;
                })
            }
        </ul>
    )
}
export default Results;