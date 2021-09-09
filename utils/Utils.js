function setLoadingSpinner(id_loading_container){
    let container = document.querySelector(`${id_loading_container}`);
    const loading = container.querySelector('.loading');
    if (loading) {
        console.log("close");
        loading.remove()
    } else {
        console.log("open");
        const spinner = document.createElement('img')
            spinner.src = "./loading.gif";
            spinner.className = "loading";
            spinner.alt = "image de chargement";
        container.appendChild(spinner);
    }
}

function requestHandler(request = Promise) {
    return request
    .then(res=>{
        if (res.ok) {
            return res.json()
        }else{
            console.error("error while requesting data from the api");
        }
    })
    .catch(err=>{
        console.log(err);
    })       
}

function millisToMinutesAndSeconds(millis) {

    let minutes = Math.floor(millis / 60000);

    let seconds = ((millis % 60000) / 1000).toFixed(0);

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

}

export {
    setLoadingSpinner,
    requestHandler,
    millisToMinutesAndSeconds
}