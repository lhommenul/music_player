import axios from "axios"

let reqArtist = ({search,offset,limit})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`artist:${encodeURI(search)}`,
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
let reqAlbum = async ({search,offset,limit})=>{
    try {
        console.log(offset);
        return await axios({
            url:`https://musicbrainz.org/ws/2/recording/`,
            method:"GET",
            params:{
                query:`release:${encodeURI(search)}`,
                fmt:"json",
                limit:limit,
                offset:offset,
            }
        })
    } catch (error) {
        return error;
    }
}
let reqTitle = ({search,offset,limit})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`${encodeURI(search)}`,
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
