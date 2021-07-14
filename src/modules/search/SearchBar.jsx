import React from 'react'
import {req}from "../request/req"
import "./css/style.css"
import {useEffect} from "react"
import {EventEmitter} from "../event/index"

const SearchBar = () => {
    useEffect(() => {
        document.querySelector("#form_search").addEventListener("submit",e=>{
            let search_inp = e.target["search_inp"].value;
            let select_opt = e.target["select_opt"].value;
            e.preventDefault()
            req(select_opt,search_inp)
            .then(data=>{
                EventEmitter.dispatch('getResultsFromApi',data)
                console.log(data);
            })
            .catch(err=>{
                console.error(err);
            })
        })
        return () => {
            
        };
    }, []);
    return (
        <header>
            <form action="" id="form_search">
                {/* INPUT SEARCH BAR */}
                <label htmlFor="">
                    <input required type="text" name="search_inp" placeholder="album/title/..." />
                </label>
                {/* SELECT */}
                <select name="select_opt" id="">
                    <option value="artist">artist</option>
                    <option value="album">album</option>
                    <option value="everything">everything</option>
                    <option value="title">title</option>
                </select>
                <button type="submit">Search</button>                
            </form>
        </header>
    )
}

export default SearchBar
