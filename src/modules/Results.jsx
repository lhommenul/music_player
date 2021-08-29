import {React,useEffect,useState} from 'react'
import Result from "./Result";
import {reqArtist,reqAlbum,reqTitle} from "../utils/requests";
import './css/results.css';
const Results = ({set_search_data,search_data}) => {
    let limit = 50, offset = 0,data_is_loaded = false;
    useEffect(() => {
        if (search_data.reset) { // reset results
            search_data.reset = true;
            search_data.data = [];
            search_data.stotal_count=0;
            set_search_data(search_data)
        }else{
            start();
        }
        window.onscroll = function() {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && data_is_loaded) {
                data_is_loaded = false;
                offset += 50;
                start();
            }
        };
    }, [search_data]);
    function start() {
        if (search_data.value) { // there is values
            getDataFromApi(search_data)
            .then(response=>{
                if (Array.isArray(response)) {// is an array
                    let total = response.reduce((accumulator,current_value)=>{
                        accumulator.count += current_value.data.count;
                        accumulator.recordings = accumulator.recordings.concat(current_value.data.recordings);
                        return accumulator;
                    },{count:0,recordings:[]})
                    search_data.data = total.recordings;
                    search_data.total_count=total.count;
                    set_search_data(search_data);   
                } else {// if not an array
                    search_data.data = response.data.recordings;
                    search_data.total_count=response.data.count;
                    set_search_data({data:response.data.recordings,total_count:response.data.count});   
                }
                data_is_loaded = true;
            })
            .catch(err=>{
                console.error(err);
            })
        }
        function getDataFromApi(search_data) {
            const normalise_object ={
                search_inp:search_data.value,
                limit:limit,
                offset:offset
            }; 
            switch (search_data.type) {
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
            {!search_data.value && // If no Results 
                <li className="total_count">
                    Aucun Resultats
                </li>
            }
            {search_data.value && search_data.data&&
                <li className="total_count">
                    Nombre Total de Reponses : {search_data?.total_count}
                </li>
            }            
            {search_data.value && search_data.data && // if there is results
                search_data?.data?.map((result,index)=>{
                    return <Result
                        result_data={result}
                    ></Result>;
                })
            }
        </ul>
    )
}
export default Results;