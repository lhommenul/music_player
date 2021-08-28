import {React} from 'react'
const Results = ({results}) => {
    if (!results) { // not results

    } else { // results
        
    }
    return (
        <div>
            {!results&& // If no Results 
                <h1>Salut</h1>
            }            
            {results&&
                
            }
        </div>
    )
}
export default Results;