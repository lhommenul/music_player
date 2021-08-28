import {React} from 'react'
import Result from "./Result";
import './css/results.css';
const Results = ({results}) => {
    if (!results) { // not results
    
    } else { // results
        
    }
    return (
        <ul className="list_container_results">
            {!results&& // If no Results 
                <Result 
                    artist_name={"aucun resultats"} 
                ></Result>
            }            
            {results&&
                <Result></Result>
            }
        </ul>
    )
}
export default Results;