import axios from "axios"

let reqArtist = ({search_inp,offset,limit})=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`artist:"${search_inp}"`,
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
                query:`release:"${search_inp}"`,
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
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording`,
            method:"GET",
            params:{
                query:`recording:"${search_inp}"`,
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

// REQUEST BY ID
let reqArtistById = (id)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording/${encodeURI(id)}`,
            method:"GET",
            params:{
                fmt:"json",
                inc:`artists+releases+isrcs+url-rels`,
            }
        })
    } catch (error) {
        return error;
    }
}
let reqAlbumById = async (id)=>{
    try {
        return await axios({
            url:`https://musicbrainz.org/ws/2/recording/${encodeURI(id)}`,
            method:"GET",
            params:{
                fmt:"json",
                inc:`artists+releases+isrcs+url-rels`,
            }
        })
    } catch (error) {
        return error;
    }
}
let reqTitleById = (id)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/recording/${encodeURI(id)}`,
            method:"GET",
            params:{
                fmt:"json",
                inc:`artists+releases+isrcs+url-rels`,
            }
        })
    } catch (error) {
        return error;
    }
}

let reqCoverReleaseById = (id)=>{
    // ex : https://coverartarchive.org/release/99b09d02-9cc9-3fed-8431-f162165a9371
    try {
        return axios({
            url:`https://coverartarchive.org/release/${encodeURI(id)}`,
            method:"GET",
        })
    } catch (error) {
        return error;
    }
}

export {
    reqArtist,
    reqAlbum,
    reqTitle,
    reqArtistById,
    reqAlbumById,
    reqTitleById,
    reqCoverReleaseById
}
