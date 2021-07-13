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
        <section>
            {/* MESSAGE */}
            <div>

            </div>
            {/* LIST ALL RESULTS */}
            <ul className="list_res">
                {list_res.map((e,i)=>{
                    return <Result store={props.store} key={i} index={i}></Result>
                })}
            </ul>
            {/* SPINNER LOADER */}
            <div>

            </div>
        </section>
    )
}

export default Results
