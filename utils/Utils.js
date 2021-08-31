function setLoadingSpinner(id_loading_container){
    let container = document.querySelector(`#${id_loading_container}`);
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
}function requestHandler(request = Promise) {
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


export {
    setLoadingSpinner,
    requestHandler
}