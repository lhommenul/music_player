import {reqArtist,reqAlbum,reqTitle} from './req.js'
import Result from './Result.js';
import Modal from './Modal.js'
class Results{
    results = [];
    search_type;
    search_value;
    limit = 50;
    offset = 0;
    loaded = false;
    modal;
    html;
    constructor(){
        this.modal = new Modal();
        this.html = this.generateHtml("main");
    }
    generateHtml(parent_id) {
        // create all elements needed for the search bar
        let section = document.createElement('section');
            let list = document.createElement('ul');
                let data = document.createElement('li');
                    let music_title = document.createElement('p')
                    let release_title = document.createElement('p')
                    let artist_name = document.createElement('p')
                    let responses_count = document.createElement('p')
                        let total_count = document.createElement('span')
                let no_data = document.createElement('li');
                    let no_data_text = document.createElement('p');

        (()=>{ // set values and data
            data.className = "default_information not_displayed"

                music_title.innerText = "Titre de la musique";
                release_title.innerText = "Titre de l'album";
                artist_name.innerText = "Nom de l'artiste";
                responses_count.innerText = "Résultats : ";
                    total_count.className = "total_count"
            no_data.className = "no_results"

                no_data_text.innerText = "Aucuns Résultats"
        })();

        (()=>{ // append elements
            section.appendChild(list);

                data.appendChild(music_title)
                data.appendChild(release_title)
                data.appendChild(artist_name)
                data.appendChild(responses_count)
                    responses_count.appendChild(total_count)
                no_data.appendChild(no_data_text)

                    list.appendChild(data)
                    list.appendChild(no_data)

            document.querySelector(`#${parent_id}`).appendChild(section); // append to html doc
        })();

        (()=>{ // events ...    
            window.addEventListener('scroll',()=>{
                if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && this.loaded) {
                    this.loaded = false;
                    console.log(this.offset);
                    this.offset+=50;
                    this.searchData(this.search_type,this.search_value)
                }
            })
        })();
        return section;
    }
    setResult(result){
        this.results.push(result); // push the object inside a variable
        const list_container = this.html.querySelector('ul'); // select the html container element 
        list_container.appendChild(result.getHtml()) // push results inside the container
    }
    getResults(){
        return this.results;
    }
    clearResults(){
        this.html.querySelectorAll('.result_container').forEach(res=>{
            res.remove()
        })
        return this.results = [];
    }
    setTotalResponses(total_responses){
        this.loaded = true;
        const default_information = this.html.querySelector(".default_information")
        const no_results = this.html.querySelector(".no_results")
        const total_count = this.html.querySelector(".total_count");
        if (total_responses > 0) {
            default_information.classList.remove("not_displayed")
            no_results.classList.add("not_displayed")
            total_count.textContent = total_responses;
        } else {
            total_count.textContent = 0;
            default_information.classList.add("not_displayed")
            no_results.classList.remove("not_displayed")
        }
    }
    searchData(search_type,search_value){
        if (this.search_value != search_value || this.search_type != search_type) {
            this.clearResults();
        }
        this.search_type = search_type;
        this.search_value = search_value;
        // console.log(search_type,search_value);
        console.log(search_type);
        switch (search_type) {
            case "0":
                reqTitle(search_value,this.offset,this.limit)
                .then(res=>{
                    if (res.ok) {
                        res.json().then((response)=>{
                            this.setTotalResponses(response.count);
                            response.recordings.forEach(record => {
                                this.setResult(new Result(record,this.modal,0));
                            });
                        })
                    }
                })
                .catch(err=>{
                    console.log(err);
                })                        
                break;
            case "1":
                reqArtist(search_value,this.offset,this.limit)
                .then(res=>{
                    if (res.ok) {
                        res.json().then((response)=>{
                            console.log(response);
                            this.setTotalResponses(response.count);
                            console.log(this.modal);
                            response.recordings.forEach(record => {
                                this.setResult(new Result(record,this.modal,1));
                            });
                        })
                    }
                })
                .catch(err=>{
                    console.log(err);
                })                
                break;
            case "2":
                reqAlbum(search_value,this.offset,this.limit)
                .then(res=>{
                    if (res.ok) {
                        res.json().then((response)=>{
                            this.setTotalResponses(response.count);
                            response.recordings.forEach(record => {
                                this.setResult(new Result(record,this.modal,2));
                            });
                        })
                    }
                })
                .catch(err=>{
                    console.log(err);
                })                    
                break;
            case "3":
    
                break;                                                    
            default:
                console.error("error");
                break;
        }
    }
}   

export default Results;