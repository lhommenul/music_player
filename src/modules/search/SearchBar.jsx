import React from 'react'
import {reqArtist,reqTitle,reqAlbum}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter,setTotalResponse,spinnerDisplay} from "../event/index"

const SearchBar = () => {
    let type_data_requested,limit = 50,offset= 0,loaded = false,search,total=0, list_res = [],search_inp,search_opt;
    useEffect(() => {
        document.querySelector("#input_res_user").addEventListener('keypress',e=>{
            if (e.key === "Enter") {
                e.preventDefault() 
                search_inp = document.querySelector("#input_res_user").value; // search input result
                search_opt = document.querySelector("#select_option_user").value; // select html element option
                offset = 0; // reset the offset
                list_res = [] // list of normalized data from the api
                requestData(search_opt) // request data from the api
                spinnerDisplay(true) // display the loading spinner            
            }
        })
        document.querySelector("#form_search").addEventListener("submit",e=>{
            e.preventDefault() 
            search_inp = e.target["search_inp"].value; // search input result
            search_opt = e.target["select_opt"].value; // select html element option
            offset = 0; // reset the offset
            list_res = [] // list of normalized data from the api
            requestData(search_opt) // request data from the api
            spinnerDisplay(true) // display the loading spinner
        })
    }, []);
    function normalizeData(response) {
        // executing normalize function on the data from the api
        if (type_data_requested != 3) nomalize(response)
        else response.forEach(data=>{ nomalize(data) });
        function nomalize(response) {
            // create a unified object for the data
            response.data.recordings.forEach(res_title=>{
                try {
                    list_res.push({
                        type_data_requested:type_data_requested,
                        // GET THE TITLE => .title
                        title : res_title?.title??"unknow title",
                        // GET THE ARTIST => .artist-credit[].artist.name
                        name : res_title['artist-credit'][0]?.artist?.name??"unknow name",
                        // GET THE ALBUM => .releases[].title
                        album : res_title?.releases[0]?.title??"unknow title",
                        // release id
                        release:res_title?.releases,
                        // data en vrac
                        data:res_title
                    })
                } catch (error) { console.error(error) }
            }) 
        }
        loaded = true; // make new request is enabled
        EventEmitter.dispatch('setData',list_res)
    }
    // LOAD DATA WHEN ON THE BOTTOM OF THE PAGE
    window.addEventListener("scroll",function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && loaded && offset-limit!=total) {
            offset+=limit; // increase offset 
            requestData() // requesting new data from the api
            spinnerDisplay(true) // display the loading spinner
            loaded = false; // during the request disabled the possibility to request more data from the api        
        }
    })
    function requestData() {
        // 0 = title / 1 = artist / 2 = album / 3 = everything / other = undefined 
        switch (search_opt) {
            case '0':
                // REQUEST FOR A TITLE
                reqTitle({search_inp,offset,limit}).then(response=>{
                    setTotalResponse(response.data.count)
                    total = response.data.count;
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
                    total = response.data.count;
                    search = search_inp;
                    type_data_requested = 1;
                    normalizeData(response)
                })                
                break;
            case '2':
                console.log('album');
                // REQUEST FOR AN ALBUM
                reqAlbum({search_inp,offset,limit}).then(response=>{
                    total = response.data.count;
                    setTotalResponse(response.data.count)
                    search = search_inp;
                    type_data_requested = 2;
                    normalizeData(response)
                })
                break;
            case '3':
                Promise.all([reqAlbum({search_inp,offset,limit}),reqArtist({search_inp,offset,limit}),reqTitle({search_inp,offset,limit})]).then(response=>{
                    let total_responses = response.reduce((accumulator,cv)=>accumulator + cv.data.count,0)
                    setTotalResponse(total_responses)
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
    }
    return (
        <header>
            <form action="" id="form_search">
                {/* INPUT SEARCH BAR */}
                <label htmlFor="">
                    Rechercher
                    <input required type="text" name="search_inp" id="input_res_user" placeholder="album/title/..." />
                </label>
                {/* SELECT */}
                <select name="select_opt" id="select_option_user">
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
