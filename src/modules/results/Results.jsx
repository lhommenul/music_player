import React from 'react'
import Result from './result/Result'

let list_res = [
    {

    },
    {

    },
    {

    },
    {

    },
]

const Results = (props) => {
    return (
        <ul>
            {/* MESSAGE */}
            <div>

            </div>
            {/* LIST ALL RESULTS */}
            <div>
                {list_res.map((e,i)=>{
                    return <Result store={props.store} key={i} index={i}></Result>
                })}
            </div>
            {/* SPINNER LOADER */}
            <div>

            </div>
        </ul>
    )
}

export default Results
