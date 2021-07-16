import axios from "axios"

let reqArtist = (query)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/artist`,
            method:"GET",
            params:{
                query:`artist:${query}`,
                fmt:"json"
            }
        })
    } catch (error) {
        return error;
    }
}
let reqAlbum = (query)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/release`,
            method:"GET",
            params:{
                query:`title:${query}`,
                fmt:"json"
            }
        })
    } catch (error) {
        return error;
    }
}
let reqTitle = (query)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`recording:${query}`,
                fmt:"json"
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
