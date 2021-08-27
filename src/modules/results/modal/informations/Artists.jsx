import {React,useEffect,useState} from 'react'
const Artists = (props) => {
    const [artists, setArtists] = useState([])
    useEffect(() => {
        console.log(props);
        if (props.artists) {
            console.log(props.artists);
            // setArtists(artists => artists.concat(props.artists))
        }
    }, []);
    return (
        <ul>
            <li>yes</li>
            {/* {artists.map(artist_info=>{
                console.log(artist_info);
                return <h2>{artist_info?.artist}</h2>;
            })} */}
        </ul>
    )
}
export default Artists;