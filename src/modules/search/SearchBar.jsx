import React from 'react'
import {reqArtist,reqTitle,reqAlbum}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter,setTotalResponse,spinnerDisplay} from "../event/index"

const SearchBar = () => {
    // 0 =  title, 1 = artist, album = 2, everything = 3
    let type_data_requested,limit = 50,offset= 0,loaded = false,search, list_res = [];
    useEffect(() => {
        document.querySelector("#form_search").addEventListener("submit",e=>{
            offset = 0;
            e.preventDefault()
            let search_inp = e.target["search_inp"].value,
                search_opt = e.target["select_opt"].value;
            list_res = []
            spinnerDisplay(true)
            switch (search_opt) {
                case '0':
                    // REQUEST FOR A TITLE
                    reqTitle({search_inp,offset,limit}).then(response=>{
                        setTotalResponse(response.data.count)
                        search = search_inp;
                        type_data_requested = 0;
                        normalizeData(response)
                    })
                    .catch(err=>{ console.log(err) })
                    break;
                case '1':
                    // REQUEST FOR AN ARTIST
                    reqArtist({search_inp,offset,limit}).then(response=>{
                        setTotalResponse(response.data.count)
                        search = search_inp;
                        type_data_requested = 1;
                        normalizeData(response)
                    })                
                    break;
                case '2':
                    console.log('album');
                    // REQUEST FOR AN ALBUM
                    reqAlbum({search_inp,offset,limit}).then(response=>{
                        setTotalResponse(response.data.count)
                        search = search_inp;
                        type_data_requested = 2;
                        normalizeData(response)
                    })
                    break;
                case '3':
                    Promise.all([reqAlbum({search_inp,offset,limit}),reqArtist({search_inp,offset,limit}),reqTitle({search_inp,offset,limit})]).then(response=>{
                        setTotalResponse(response.reduce((pv,cv)=>{
                            return pv = cv.data.count;
                        }))
                        search = search_inp;
                        type_data_requested = 3;
                        normalizeData(response)
                    })
                    .catch(err=>{
                        console.log('error de merde => '+err);
                    })
                    break;                                                                
                default:
                    spinnerDisplay(false)
                    break;
            }
        })
    }, []);
    function normalizeData(response) {
        switch (type_data_requested) {
            case 0:
                // ARTIST, TITLE, ALBUM
                nomalize(response)                
                break;                           
            case 1:
                // ARTIST, TITLE, ALBUM
                nomalize(response)                
                break;                           
            case 2:
                // ARTIST, TITLE, ALBUM
                nomalize(response)                
                break;                                                               
            case 3:
                for (let index = 0; index < response.length; index++) {
                    const element = response[index];
                    nomalize(element)   
                }
                break;
        }
        function nomalize(response) {
            response.data.recordings.forEach(res_title=>{
                try {
                    list_res.push({
                        // GET THE TITLE => .title
                        title : res_title?.title,
                        // GET THE ARTIST => .artist-credit[].artist.name
                        name : res_title['artist-credit'][0]?.artist?.name,
                        // GET THE ALBUM => .releases[].title
                        album : res_title?.releases[0]?.title,
                        // release id
                        release:res_title?.releases,
                        // data en vrac
                        data:res_title
                    })
                } catch (error) {
                    console.error(error);
                }
            }) 
        }
        offset += limit;
        loaded = true;
        EventEmitter.dispatch('setData',list_res)
    }
    // LOAD DATA WHEN ON THE BOTTOM OF THE PAGE
    window.addEventListener("scroll",function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && loaded) {
            spinnerDisplay(true)
            loaded = false;
            switch (type_data_requested) {
                case 0:
                    reqTitle({search,offset,limit})
                    .then(response=>{ normalizeData(response,search) })
                    .catch(err=>{
                        console.error(err);
                    })
                    break;
                case 1:
                    reqArtist({search,offset,limit})
                    .then(response=>{ normalizeData(response,search) })
                    .catch(err=>{
                        console.error(err);
                    })
                    break;
                case 2:
                    reqAlbum({search,offset,limit})
                    .then(response=>{ normalizeData(response,search) })
                    .catch(err=>{
                        console.error(err);
                    })
                    break;                                    
                case 3:
                    Promise.all([reqAlbum({search,offset,limit}),reqArtist({search,offset,limit}),reqTitle({search,offset,limit})]).then(response=>{
                        normalizeData(response,search)
                    })
                    break;                                                        
                default:
                    break;
            }
        }
    })
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
                    <option value="0">title</option>
                    <option value="1">artist</option>
                    <option value="2">album</option>
                    <option value="3">everything</option>
                </select>
                <button type="submit">Search</button>                
            </form>
        </header>
    )
}

export default SearchBar
