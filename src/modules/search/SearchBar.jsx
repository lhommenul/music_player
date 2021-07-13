import React from 'react'

const SearchBar = () => {
    return (
        <header>
            <form action="">
                {/* INPUT SEARCH BAR */}
                <label htmlFor="">
                    <input type="text" placeholder="album/title/..." />
                </label>
                {/* SELECT */}
                <select name="" id="">
                    <option value="">artist</option>
                    <option value="">album</option>
                    <option value="">everything</option>
                </select>
                <button type="submit">Search</button>                
            </form>
        </header>
    )
}

export default SearchBar
