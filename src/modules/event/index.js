const EventEmitter = {    
    _events: {},    
    dispatch: function (event, data) {        
      if (!this._events[event]) return;             
      this._events[event].forEach(callback => callback(data))    
    },    
    subscribe: function (event, callback) {      
      if (!this._events[event]) this._events[event] = [];        
      this._events[event].push(callback);    
  }} 

let setTotalResponse = (nb)=> {
  const title_message_user = document.querySelector("#message_for_the_user")
  if (nb === 0) {
      // set no results
      title_message_user.textContent = `Aucun Resultats`;
  } else {
      // add the total count to the html element
      title_message_user.textContent = `Nombre total de resultats : ${nb}`;
  }
}
let spinnerDisplay = (visible)=>{
  const spin = document.querySelector('#spin');
  if (visible) {
    spin.style.visibility = 'visible';
  } else {
    spin.style.visibility = 'hidden';
  }

}
module.exports = { EventEmitter,setTotalResponse,spinnerDisplay };