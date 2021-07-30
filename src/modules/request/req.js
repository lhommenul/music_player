import axios from "axios"

let obj = {
    artist_name:undefined,
    music_title:undefined,
    album_title:undefined,
    data:[]
}

let reqArtist = ({search_inp,offset,limit})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`artist:${encodeURI(search_inp)}`,
                inc:`recordings+releases+release-groups+works+media`,
                fmt:"json",
                limit:limit,
                offset:offset,
            }
        })
    } catch (error) {
        return error;
    }
}
let reqAlbum = async ({search_inp,offset,limit})=>{
    try {
        console.log(offset);
        return await axios({
            url:`https://musicbrainz.org/ws/2/recording/`,
            method:"GET",
            params:{
                query:`release:${encodeURI(search_inp)}`,
                fmt:"json",
                limit:limit,
                offset:offset,
            }
        })
    } catch (error) {
        return error;
    }
}
let reqTitle = ({search_inp,offset,limit})=>{
    console.log(offset,limit);
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`${encodeURI(search_inp)}`,
                inc:`artists+releases+isrcs+url-rels`,
                fmt:"json",
                limit:limit,
                offset:offset,
            }
        })
    } catch (error) {
        return error;
    }
}
export {
    reqArtist,
    reqAlbum,
    reqTitle,
}
