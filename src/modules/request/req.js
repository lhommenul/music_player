import axios from "axios"

let obj = {
    artist_name:undefined,
    music_title:undefined,
    album_title:undefined,
    data:[]
}

let reqArtist = ({search_inp})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/artist`,
            method:"GET",
            params:{
                query:`${encodeURI(search_inp)}`,
                inc:`recordings+releases+release-groups+works+media`,
                fmt:"json",
                limit:'10',
                offset:'0',
            }
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
                fmt:"json",
                limit:'10',
                offset:'0',
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
                query:`${encodeURI(search_inp)}`,
                inc:`artists+releases+isrcs+url-rels`,
                fmt:"json",
                limit:'10',
                offset:'0',
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
