import axios from "axios"

let obj = {
    artist_name:undefined,
    music_title:undefined,
    album_title:undefined,
    data:[]
}

let reqArtist = (query)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/artist`,
            method:"GET",
            mode:'no-cors',
            params:{
                query:`artist:${query}`,
                fmt:"json"
            }
        })
    } catch (error) {
        return error;
    }
}
let reqAlbum = async (query)=>{
    try {
        return await axios({
            url:`https://musicbrainz.org/ws/2/release`,
            method:"GET",
            params:{
                query:`title:${query}`,
                fmt:"json"
            }
        })
        .then(res=>{
            console.log(res.data.releases[0]);
            return {
                artist_name:res.data.releases[0]["artist-credit"][0].name,
                music_title:undefined,
                album_title:undefined,
            }
        })
        .catch(err=>{
            return err;
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
            mode:'no-cors',
            params:{
                query:`recording:${encodeURIComponent(query)}`,
                fmt:"json",
            },
        })
        .catch(err=>{
            return err;
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
