import {React} from 'react'
const SearchBar = () => {
    return (
        <nav>
            <form>
                <label>
                    <input type="text" placeholder="Recherche"/>
                </label>
                <input type="button" value="Go"/>
            </form>
        </nav>
    )
}
export default SearchBar;