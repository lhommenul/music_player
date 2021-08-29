import {React} from 'react'
const SearchBar = ({set_search_data}) => {
    function setSearchData() {
        const input = document.querySelector("#search_input"); // get input
        const select_options = document.querySelector("#select_options"); // get input
        const data = {
            value:input.value,
            type:select_options.value,
            reset:true,
            data:[],
            total_count:0
        };
        set_search_data(data); // set search data informations
    }
    return (
        <nav>
            <form>
                <label>
                    <input id="search_input" type="text" placeholder="Recherche"/>
                </label>
                <label>
                    <select name="" id="select_options">
                        <option value="0">Titre</option>
                        <option value="1">Album</option>
                        <option value="2">Artist</option>
                        <option value="3">Everything</option>
                    </select>
                </label>
                <input type="button" value="Go" onClick={setSearchData}/>
            </form>
        </nav>
    )
}
export default SearchBar;