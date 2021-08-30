

let reqArtist = (search_inp,offset,limit)=>{
    console.log(search_inp);    
    try {
        return fetch(
            `https://musicbrainz.org/ws/2/recording?`+ new URLSearchParams(
                {
                    query:`artist:"${search_inp}"`,
                    inc:`recordings+releases+release-groups+works+media`,
                    fmt:"json",
                    limit:limit,
                    offset:offset,
                }
            ),
            {
                method:"GET",
            }
        )
    } catch (error) {
        return error;
    }
}
let reqAlbum =  (search_inp,offset,limit)=>{
    try {
        console.log(offset);
        return fetch(
            `https://musicbrainz.org/ws/2/recording/?`+ new URLSearchParams(
                {
                    query:`release:"${search_inp}"`,
                    fmt:"json",
                    limit:limit,
                    offset:offset,
                }
            ),
            {method:"GET"},
        )
    } catch (error) {
        return error;
    }
}
let reqTitle = (search_inp,offset,limit)=>{
    try {
        return fetch(
            `https://musicbrainz.org/ws/2/recording?`+ new URLSearchParams(
                {
                    query:`"${search_inp}"`,
                    inc:`artists+releases+isrcs+url-rels`,
                    fmt:"json",
                    limit:limit,
                    offset:offset,
                }
            ),
            {method:"GET"}
        )
    } catch (error) {
        return error;
    }
}

// REQUEST BY ID
let reqArtistById = (id)=>{
    try {
        return fetch(
            `https://musicbrainz.org/ws/2/recording/${encodeURI(id)}?`+new URLSearchParams(
                {                
                    fmt:"json",
                    inc:`artists+releases+isrcs+url-rels`
                }
            ),
            {method:"GET"}
        )
    } catch (error) {
        return error;
    }
}
let reqAlbumById = async (id)=>{
    try {
        return await fetch(
            `https://musicbrainz.org/ws/2/recording/${encodeURI(id)}?`+new URLSearchParams(
                {
                    fmt:"json",
                    inc:`artists+releases+isrcs+url-rels`,
                }
            ),
            {method:"GET"}
        )
    } catch (error) {
        return error;
    }
}
let reqTitleById = (id)=>{
    try {
        return fetch(
            `https://musicbrainz.org/ws/2/recording/${encodeURI(id)}?`+new URLSearchParams(
                {
                    fmt:"json",
                    inc:`artists+releases+isrcs+url-rels`,
                }
            ),
            {method:"GET"}
        )
    } catch (error) {
        return error;
    }
}

let reqCoverReleaseById = (id)=>{
    // ex : https://coverartarchive.org/release/99b09d02-9cc9-3fed-8431-f162165a9371
    try {
        return fetch(
            `https://coverartarchive.org/release/${encodeURI(id)}`,
            {method:"GET"},
        )
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
