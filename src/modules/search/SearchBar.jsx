import React from 'react'
import {reqArtist,reqTitle,reqAlbum}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter} from "../event/index"

const SearchBar = () => {
    useEffect(() => {
        document.querySelector("#form_search").addEventListener("submit",e=>{
            let search_inp = e.target["search_inp"].value;
            let search_opt = e.target["select_opt"].value;
            e.preventDefault()
            reqAlbum({search_inp}).then(data=>{
                const recordings = data.data.recordings;
                let list_records_to_show = []
                recordings.forEach(e=>{
                    let record = {
                        name:e['artist-credit'][0].name,
                        title:e.title,
                        album:e.releases[0].title
                    }
                    list_records_to_show.push(record)
                })
                EventEmitter.dispatch('getResultsFromTitle',data.data.recordings)  
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
