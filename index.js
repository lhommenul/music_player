// ==== MODULES ====
import {reqArtist} from './Request.js'
import SearchBar from './SearchBar.js'
import Results from './Results.js'

const container_results = new Results();

const search_bar = new SearchBar(container_results);
