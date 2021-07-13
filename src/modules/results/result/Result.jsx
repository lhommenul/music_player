import React from 'react'

const Result = (props) => {
    let nb = props.nb;
    return (
        <li>
            {nb}
            <p>Artist</p>
            <p>Title</p>
            <p>Album</p>
            <button>+</button>
        </li>
    )
}

export default Result
