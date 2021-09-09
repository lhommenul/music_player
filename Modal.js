import {reqArtistById,reqAlbumById,reqTitleById,reqCoverReleaseById} from "./Request.js";
import {millisToMinutesAndSeconds} from './utils/Utils.js'

class Modal{
    html;
    modal_is_open=false;
    modal_data;
    constructor(){
        this.html = this.generateHtml();
    }
    generateHtml() {
        // create all elements needed for the search bar
        const container_modal = document.createElement('section');
            const btn_close_modal = document.createElement('button');
            const modal = document.createElement('ul');

        (()=>{ // set values and data
            container_modal.className = "modal_container not_displayed";

                modal.className = "modal";

                btn_close_modal.className = "btn_modal";
                btn_close_modal.textContent = "Close"
            
        })();

        (()=>{ // append elements
            container_modal.appendChild(modal);
            container_modal.appendChild(btn_close_modal);
        })();

        (()=>{ // events ...    
            container_modal.addEventListener('click',e=>{
                if (container_modal === e.target) { // check if this is the background witch is clicked
                    this.setModalStatut(container_modal)
                }
            })
            window.addEventListener("keyup",e=>{
                if (e.key === "Escape" && this.modal_is_open) {
                    this.setModalStatut(container_modal)    
                }
            })
            btn_close_modal.addEventListener('click',()=>{ // check if the btn is 
                this.setModalStatut(container_modal)
            })
        })();
        document.querySelector('body').appendChild(container_modal);
        return container_modal;
    }
    clearModalData(){
        const modal_data = this.html.querySelector('.modal');
        while (modal_data.hasChildNodes()) { // delete all data inside thhe modal
            modal_data.firstChild.remove()
        }
    }
    setModalData(modal_data,type){
        this.clearModalData()
        const modal_html_container = this.html.querySelector('.modal');
        switch (type) {
            case 0:
                reqTitleById(modal_data.id)
                    .then(res=>{
                        if (res.ok) {
                            res.json().then(async(response)=>{
                                 generateHtml(response)
                            })
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })                
                break;
                case 1:
                    reqArtistById(modal_data.id)
                        .then(res=>{
                            if (res.ok) {
                                res.json().then(async(response)=>{
                                     generateHtml(response)
                                })
                            }
                        })
                        .catch(err=>{
                            console.log(err);
                        })                    
                    break;
                    case 2:
                        reqAlbumById(modal_data.id)
                            .then(res=>{
                                if (res.ok) {
                                    res.json().then(async(response)=>{
                                         generateHtml(response)
                                    })
                                }
                            })
                            .catch(err=>{
                                console.log(err);
                            })                        
                        break;                                        
            default:
                console.error("undefined type");
                break;
        }
        function generateHtml(modal_data) {

            const title_container = document.createElement('li');
                const title = document.createElement('p');
            // ARTISTS
            const artists_container  = document.createElement('li');

            // RELEASES
            const releases_container  = document.createElement('li');

            // MUSIC LENGTH
            const music_length  = document.createElement('li');

            // GENRES 
            const container_genres  = document.createElement('li');
                const list_genres = document.createElement('ul');

            // RATING 
            const rating_container  = document.createElement('li');
                const rating  = document.createElement('p');

            // COVER
            const list_images  = document.createElement('ul');


            (()=>{ // generate titles for 

            });

            (()=>{ // appends elements
                console.log(modal_data);

                title_container.appendChild(title)
                rating_container.appendChild(rating)

                container_genres.appendChild(list_genres)

                // Titre
                modal_html_container.appendChild(title_container)

                // Artists
                modal_html_container.appendChild(artists_container)

                // Releases
                modal_html_container.appendChild(releases_container)

                // GENRES
                modal_html_container.appendChild(container_genres)

                // RATING
                modal_html_container.appendChild(rating_container)

                // LENGTH
                modal_html_container.appendChild(music_length);

                // COVER
                modal_html_container.appendChild(list_images)
            })();

            (()=>{ // set data

                list_images.className = "container_img"; 

                // music length
                music_length.textContent = `Duree : ${millisToMinutesAndSeconds(modal_data.length)}`;

                // rating
                if (modal_data.rating.value) rating.textContent = `Note : ${modal_data.rating.value} / 5`;
                else rating.textContent = "Aucune Note";

                // titre
                title.textContent =  `Titre : ${modal_data.title}`;

                // genres
                if (modal_data?.genres.length > 0) {
                    const ele_genre = document.createElement("p");
                        ele_genre.innerText = "Genre : ";
                        container_genres.appendChild(ele_genre);

                    modal_data?.genres.forEach(genre => {
                        const ele_genre = document.createElement("p");
                            ele_genre.innerText = genre.name;
                            container_genres.appendChild(ele_genre);
                    });    
                } else {
                    const ele_genre = document.createElement("p");
                        ele_genre.innerText = "Genre : Aucune Information";
                        container_genres.appendChild(ele_genre);
                }

                // artist-credit
                if (modal_data?.['artist-credit'].length > 0) {
                    const artist  = document.createElement('p');
                        artist.textContent = "Artist : ";
                        artists_container.appendChild(artist);

                    modal_data?.['artist-credit'].forEach(artist_data => { // set and append
                        const artist  = document.createElement('p');
                            artist.textContent = artist_data.name;
                            artists_container.appendChild(artist);
                    });
                } else {
                    const artist  = document.createElement('p');
                        artist.textContent = "Artiste : Aucune Information";
                        artists_container.appendChild(artist);
                }

                // releases
                if (modal_data?.releases.length > 0) { // Generate content for releases
                    // if there is at least 1 album
                    const release  = document.createElement('p');
                        release.textContent = "Albums : ";
                        releases_container.appendChild(release);

                    modal_data?.releases.forEach((release_data) => { 
                        const release  = document.createElement('p');
                            release.textContent = release_data.title;
                            release.className = "album_element"
                            releases_container.appendChild(release);
                    });
                } else { // If there is no albums
                    const release  = document.createElement('p');
                        release.textContent = "Pas de d'album"
                        releases_container.appendChild(release);
                }
                
            })();
            (()=>{
                modal_data.releases.forEach(release=>{
                    reqCoverReleaseById(release.id)
                    .then(res=>{
                        if (res.ok) {
                            res.json().then((response)=>{
                                response.images.forEach(image=>{
                                    const img = document.createElement('img')
                                    img.src = image.thumbnails.small;
                                    img.loading = "lazy";
                                    img.alt = "Pochette d'album";
                                    list_images.appendChild(img)
                                })
                            })
                        }
                    })
                    .catch(err=>{
                        console.log(err);
                    })  
                })

            })();
        }
    }
    setModalStatut(){
        this.modal_is_open = !this.modal_is_open;
        if (this.modal_is_open) { // modal is open
            console.log("modal open");
            this.html.classList.remove("not_displayed")
        } else { // modal is close
            console.log("modal close");
            this.clearModalData()
            this.html.classList.add("not_displayed")
        }
    }
    getHtml(){
        return this.html;
    }
}

export default Modal;