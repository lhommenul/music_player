class Result{
    html = [];
    res_data = {};
    constructor(result){    
        this.res_data = {
            artist_name : result["artist-credit"]?.[0]?.name??"Artist Inconnu",
            music_title : result?.title??"Titre Inconnu",
            release_name : result?.releases?.[0]?.title??"Album Inconnu"
        }
        this.generateHtml();
    }
    generateHtml() {
        // create all elements needed for the search bar
        let list_element = document.createElement('li');
            let artist_name = document.createElement('p');
            let release_name = document.createElement('p');
            let music_title = document.createElement('p');
            let see_more = document.createElement('button');

        (()=>{ // set values and data
            list_element.className = "result_container"

            artist_name.innerText =this.res_data.artist_name;
            release_name.innerText =this.res_data.release_name;
            music_title.innerText =this.res_data.music_title;

            see_more.innerText = "+"
        })();

        (()=>{ // append elements
            list_element.appendChild(artist_name);
            list_element.appendChild(release_name);
            list_element.appendChild(music_title);
            list_element.appendChild(see_more);
        })();

        (()=>{ // events ...    

        })();
        this.html = list_element;
    }
    getHtml(){
        return this.html;
    }
}   

export default Result;