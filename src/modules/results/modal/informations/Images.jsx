import "../css/images.css"
import {React,useEffect,useState} from 'react'
import {reqCoverReleaseById} from '../../../request/req'
const Images = (props) => {
    const [list_images, setListImages] = useState([])
    useEffect(() => {
        if (props.images) {
            requestCoverImages(props.images)
        }else{ // waiting for data
            setListImages(list_images=>[])
            console.error("waiting for data");
        }
    }, [props.images]);
    function requestCoverImages(list_recordings) {
        list_recordings?.forEach((recording)=>{
            reqCoverReleaseById(recording.id)
            .then(more_info=>{
                more_info?.data?.images.forEach(image => {
                    setListImages(list_images => list_images.concat([image.thumbnails.small]))
                });
            })
            .catch(err=>{
                console.error(err);
            })
        })
    }
    return (
        <ul className="list_images">
            <li className="title_images">Total Count : {list_images?.length}</li>
            {
                list_images.map(e=>{
                    return <li><img src={e} className="image" alt="image cover album" loading="lazy"/></li>
                })
            }
        </ul>
    )
}
export default Images;