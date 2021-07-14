


class Store{
    constructor(props){
        this.modal = {
            state:false,
        }
        this.data = {

        }
    }
    get modalData(){
        return this.data;
    }
    set modalData(value){
        this.data = value
    }
    get modalState(){
        return this.modal.state;
    }
    set modalState(value){
        this.modal.state = value; 
    }
}

const store = new Store()

export {store};