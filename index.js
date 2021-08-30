// ==== MODULES ====
import {reqArtist} from './req.js'
import SearchBar from './SearchBar.js'
import Results from './Results.js'
import Modal from './Modal.js'

reqArtist({search_inp:"daft punk",limit:50,offset:0})
.then(res=>{
    if (res.ok) {
        res.json().then(async(response)=>{
            console.log(response);
        })
    }
})
.catch(err=>{
    console.log(err);
})



const container_results = new Results();

const search_bar = new SearchBar(container_results);

new Modal();