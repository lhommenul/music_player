// ==== MODULES ====
import {reqArtist} from './req.js'
import SearchBar from './SearchBar.js'
import Results from './Results.js'

const container_results = new Results();

const search_bar = new SearchBar(container_results);
