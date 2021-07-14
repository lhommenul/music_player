import axios from "axios"

let req = (type,query)=>{
    try {
        return axios({
            url:`https://musicbrainz.org/ws/2/${type}?query=${encodeURI(query)}`,
            method:"GET",
            params:{
                fmt:"json"
            }
        })
    } catch (error) {
        return error;
    }
}
export {
req
}
