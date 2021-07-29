import React from 'react'
import {reqArtist,reqTitle,reqAlbum}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter} from "../event/index"

const SearchBar = () => {
    let offset = 0;
    let limit = 10;
    window.addEventListener('scroll',e=>{
        // e.target.body.offsetHeight
        console.log(e);
    })
    useEffect(() => {
        document.querySelector("#form_search").addEventListener("submit",e=>{
            let search_inp = e.target["search_inp"].value;
            let search_opt = e.target["select_opt"].value;
            e.preventDefault()
            reqTitle({search_inp}).then(response=>{
                EventEmitter.dispatch('getResultsFromTitle',response)  
                offset = response.data.length;
            })
            // reqTitle({search_inp,search_opt}).then(data=>{    
            // })
            // reqArtist({search_inp,search_opt}).then(data=>{    
            //     EventEmitter.dispatch('getResultsFromApi',data)  
            // })
        })
        return () => {
            
        };
    }, []);
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
