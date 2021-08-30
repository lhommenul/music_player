import {reqArtistById,reqAlbumById,reqTitleById,reqCoverReleaseById} from "./req.js"
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
        const modal_html_container = this.html.querySelector('.modal');
        console.log(modal_data);
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
                        case 3:
                
                        break;                 
            default:
                console.error("undefined type");
                break;
        }
        function generateHtml(modal_data) {
            const title_container = document.createElement('li');
                const title = document.createElement('p');
            const artists_container  = document.createElement('li');
            const releases_container  = document.createElement('li');
            const rating_container  = document.createElement('li');
                const rating  = document.createElement('p');
            const list_images  = document.createElement('ul');
            (()=>{ // appends elements
                title_container.appendChild(title)
                rating_container.appendChild(rating)

                modal_html_container.appendChild(title_container)
                modal_html_container.appendChild(artists_container)
                modal_html_container.appendChild(releases_container)
                modal_html_container.appendChild(rating_container)
                modal_html_container.appendChild(list_images)
            })();

            (()=>{ // set data
                // rating
                console.log(modal_data.rating);
                rating.textContent = modal_data.rating.value??"Aucune Note"

                title.textContent = modal_data.title;
                // artist-credit
                modal_data?.['artist-credit'].forEach(artist_data => { // set and append
                    const artist  = document.createElement('p');
                    artist.textContent = artist_data.name;
                    artists_container.appendChild(artist)
                });
                modal_data?.releases.forEach(release_data => { // set and append
                    const release  = document.createElement('p');
                    release.textContent = release_data.name;
                    releases_container.appendChild(release)
                });
            })();
            (()=>{
                modal_data.releases.forEach(release=>{
                    reqCoverReleaseById(release.id)
                    .then(res=>{
                        if (res.ok) {
                            res.json().then(async(response)=>{
                                response.images.forEach(image=>{
                                    const img = document.createElement('img')
                                    img.src = image.thumbnails.small;
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
    getModalCover(){

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