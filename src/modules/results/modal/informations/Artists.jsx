import {React,useEffect,useState} from 'react'
const Artists = (props) => {
    const [artists, setArtists] = useState([])
    useEffect(() => {
        if (props.artists['artist-credit']) {
            setArtists(artists=>artists.concat(props.artists['artist-credit']))
            // setArtists(artists => artists.concat(props.artists))
        }
    }, []);
    return (
        <ul>
            <li>artists</li>
            {artists.map((artist_info,index)=>{
                return <li key={'artist_name_'+index}>{artist_info?.artist?.name}</li>;
            })}
        </ul>
    )
}
export default Artists;