import axios from "axios"

let obj = {
    artist_name:undefined,
    music_title:undefined,
    album_title:undefined,
    data:[]
}

let reqArtist = ({artist_name})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/artist`,
            method:"GET",
            params:{
                query:`artist:${encodeURI(artist_name)}`,
                fmt:"json",
                limit:'10',
                offset:'0',
            }
        })
        .then(data=>{
            return data.data.artists;
        })
    } catch (error) {
        return error;
    }
}
let reqAlbum = async ({search_inp})=>{
    try {
        return await axios({
            url:`https://musicbrainz.org/ws/2/recording/`,
            method:"GET",
            params:{
                query:`release:${encodeURI(search_inp)}`,
                fmt:"json"
            }
        })
    } catch (error) {
        return error;
    }
}
let reqTitle = ({search_inp})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`recording:${encodeURI(search_inp)}`,
                limit:10,
                fmt:"json",
            }
        })
    } catch (error) {
        return error;
    }
}
let reqFromApi = (type,query)=>{
    switch (type) {
        case "artist" || "artists":
            return reqArtist(query)
        case "release" || "releases":
            return reqAlbum(query)
        case "recording" || "recordings":
            return reqTitle(query)
        case "everything":
    
            break;            
        default:
            break;
    }
}
export {
    reqFromApi,
    reqArtist,
    reqAlbum,
    reqTitle,
}
