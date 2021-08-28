import {React,useEffect,useState} from 'react'
import Result from "./Result";
import {reqArtist,reqAlbum,reqTitle} from "../utils/requests";
import './css/results.css';
const Results = (props) => {
    const [results, setResults] = useState([])
    useEffect(() => {
        if (props.search_data.value) { // there is values
            getDataFromApi(props.search_data)
            .then(response=>{
                setResults(results=>response.data.recordings);
            })
            .catch(err=>{
                console.error(err);
            })
        }
        function getDataFromApi(seach_data) {
            switch (seach_data.type) {
                case "0": // Title
                    return reqTitle({search_inp:seach_data.value});
                    case "1": // Album 
                        console.log("request album");
                        return reqAlbum(seach_data.value);
                        case "2": // Artist
                            console.log("request artist");
                            return reqArtist(seach_data.value);
                            case "3": // Everything
                                console.error("everything is not prepared");
                                break;                                                    
                default:
                    console.error("type undefined");
                    break;
            }
        }
    }, [props]);
    return (
        <ul className="list_container_results">
            {!props.search_data.value && !results&& // If no Results 
                <Result 
                    artist_name={"aucun resultats"} 
                ></Result>
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