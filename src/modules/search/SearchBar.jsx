import React from 'react'
import {reqArtist,reqTitle,reqAlbum}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter} from "../event/index"

const SearchBar = () => {
    let type_data_requested,limit = 20,offset= 0,loaded = false,search, list_res = [];
    useEffect(() => {
        document.querySelector("#form_search").addEventListener("submit",e=>{
            let search_inp = e.target["search_inp"].value;
            let search_opt = e.target["select_opt"].value;
            e.preventDefault()
            // REQUEST FOR A TITLE
            reqTitle({search_inp,offset,limit}).then(response=>{
                search = search_inp;
                normalizeData(response,search_inp)
            })
            .catch(err=>{
                console.log(err);
            })
            // // REQUEST FOR AN ALBUM
            // reqAlbum({search_inp}).then(response=>{
            //     EventEmitter.dispatch('getResultsFromTitle',response)  
            //     offset = response.data.length;
            // })
            // // REQUEST FOR AN ARTIST
            // reqArtist({search_inp}).then(response=>{
            //     EventEmitter.dispatch('getResultsFromTitle',response)  
            //     offset = response.data.length;
            // })
        })
    }, []);
    function normalizeData(response,search_inp) {
        console.log(response,search_inp);
        // GET THE TITLE => .title
        // GET THE ARTIST => .artist-credit[].artist.name
        // GET THE ALBUM => .releases[].title

        const total_responses = response.data.count;
        console.log(total_responses);
        let list_recordings = response.data.recordings;
        list_recordings.forEach(res_title=>{
            list_res.push({
                title : res_title?.title,
                name : res_title['artist-credit'][0]?.artist?.name,
                album : res_title?.releases[0]?.title,
            })
        })
        offset += limit;
        loaded = true;
        console.log("RES", list_res)
        EventEmitter.dispatch('setData',list_res)
    }
    // LOAD DATA WHEN ON THE BOTTOM OF THE PAGE
    window.addEventListener("scroll",function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && loaded) {
            loaded = false;
            reqTitle({search,offset,limit})
            .then(response=>{
                normalizeData(response,search)
            })
            .catch(err=>{
                loaded = false;
                console.error(err);
            })
        }
    })
    function requestMissingData(data_type,search_inp,offset,limit) {
        switch (data_type) {
            case 0:
                console.log('REQUEST TITLE');
                    return reqTitle({search_inp,offset,limit})
            case 1:
                console.log('REQUEST');
                    return reqTitle({search_inp,offset,limit})
            case 2:
                console.log('REQUEST');
                    return reqTitle({search_inp,offset,limit})        
            default:
                console.error(`undefined data => ${data_type}`);
                break;
        }
    }
    return (
        <header>
            <form action="" id="form_search">
                {/* INPUT SEARCH BAR */}
                <label htmlFor="">
                    Rechercher
                    <input required type="text" name="search_inp" placeholder="album/title/..." />
                </label>
                {/* SELECT */}
                <select name="select_opt" id="">
                    <option value="series">title</option>
                    <option value="artist">artist</option>
                    <option value="release">album</option>
                    <option value="url">everything</option>
                </select>
                <button type="submit">Search</button>                
            </form>
        </header>
    )
}

export default SearchBar
