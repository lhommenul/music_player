class Modal{
    html;
    modal_is_open=false;
    constructor(){
        this.generateHtml();
    }
    generateHtml() {
        // create all elements needed for the search bar
        const container_modal = document.createElement('section');
            const btn_close_modal = document.createElement('button');
            const modal = document.createElement('div');

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
        this.html = container_modal;
    }
    setModalStatut(container_modal){
        container_modal??document.querySelector('.modal_container');
        this.modal_is_open = !this.modal_is_open;
        if (this.modal_is_open) { // modal is open
            console.log(container_modal);
            console.log("modal open");
            container_modal.classList.remove("not_displayed")
        } else { // modal is close
            console.log("modal close");
            container_modal.classList.add("not_displayed")
        }
    }
    getHtml(){
        return this.html;
    }
}

export default Modal;