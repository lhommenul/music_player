class SearchBar{
    container_results;
    constructor(container_results){
        this.html = this.generateHtml("nav");
        this.container_results = container_results;
    }
    generateHtml(parent_id) {
        // create all elements needed for the search bar
        let form = document.createElement('form');
            let label_input = document.createElement('label');
                let input = document.createElement('input');
            let label_select = document.createElement('label');
                let select = document.createElement('select');
                    let option_title = document.createElement('option');
                    let option_artist = document.createElement('option');
                    let option_record = document.createElement('option');
                    let option_everything = document.createElement('option');
            let button = document.createElement('input');
        (()=>{ // set values and data
            label_input.innerText = "Zone de recherche"
            input.placeholder = "Rechercher Album / Titre ..."

            option_title.value=0;
            option_title.innerText = "title"
            option_artist.value=1;
            option_artist.innerText="artist";
            option_record.value=2;
            option_record.innerText="album";
            option_everything.value=3;
            option_everything.innerText="everything";

            button.type = "button"
            button.value = "Envoyer"
        })();

        (()=>{ // append elements
            label_input.appendChild(input)

            label_select.appendChild(select)
                select.appendChild(option_title)
                select.appendChild(option_artist)
                select.appendChild(option_record)
                select.appendChild(option_everything)

            form.appendChild(label_input);
            form.appendChild(label_select);
            form.appendChild(button);

            document.querySelector(`#${parent_id}`).appendChild(form); // append to html doc
        })();

        (()=>{ // events ...    
            button.addEventListener('click',(ev)=>{
                this.container_results.searchData(select.value,input.value)
            })
            input.addEventListener('keydown',(ev)=>{
                if (ev.key === "Enter") {
                    this.container_results.searchData(select.value,input.value);
                    ev.preventDefault();
                }
            });
        })();
        return form;
    }
    
}   

export default SearchBar;