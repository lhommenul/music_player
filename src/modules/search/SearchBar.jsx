import React from 'react'
import {reqFromApi}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter} from "../event/index"

const SearchBar = () => {
    useEffect(() => {
        document.querySelector("#form_search").addEventListener("submit",e=>{
            let search_inp = e.target["search_inp"].value;
            let select_opt = e.target["select_opt"].value;
            e.preventDefault()
            reqFromApi(select_opt,search_inp)
            .then(data=>{
                console.log(data.data);
            })
           // EventEmitter.dispatch('getResultsFromApi',[data,p])
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
                    <option value="artist">artist</option>
                    <option value="release">album</option>
                    <option value="url">everything</option>
                    <option value="series">title</option>
                </select>
                <button type="submit">Search</button>                
            </form>
        </header>
    )
}

export default SearchBar
