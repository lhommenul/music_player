import React from 'react'
import "./css/style.css";
import { EventEmitter} from "../../event/index"
import { useEffect,useState } from 'react';
import { reqArtistById,reqAlbumById,reqTitleById,reqCoverReleaseById} from '../../request/req'

const Modal = () => {
    let modal_is_open = false;
    const [more_info, setMoreInfo] = useState({});
    const [cover_art, setCoverArt] = useState([]);
    const [modal_data, setModalData] = useState({});
    EventEmitter.subscribe('displayModal',(modal_props_data)=>{
        modal_is_open = !modal_is_open;
        setCoverArt([])
        setModalData({ ...modal_data, ...modal_props_data })
        setModalState()
    });
    useEffect(() => {
        setModalState()
        // Close Modal on button click
        document.querySelector(".modal_btn").addEventListener('click',e=>{
            modal_is_open = !modal_is_open;
            setModalState()  
        })
    }, []);
    useEffect(() => {
        console.log(cover_art);
        switch (modal_data.type_data_requested) {
            case 0:
                reqTitleById(modal_data.data.id)
                .then(data=>{
                    console.log(data.data);
                    const concat_data = {...more_info,...data.data};
                    setMoreInfo(concat_data)
                    // get cover if they exists for the bdd cover art music brainz
                    coverImages(concat_data)
                })
                .catch(err=>{
                    console.error(err);
                })
                break;
            case 1:
                reqArtistById(modal_data.data.id)
                .then(data=>{
                    const concat_data = {...more_info,...data.data};
                    setMoreInfo({...more_info,...data.data})
                    coverImages(concat_data)
                })
                .catch(err=>{
                    console.error(err);
                })
                break;
            case 2:
                reqAlbumById(modal_data.data.id)
                .then(data=>{
                    const concat_data = {...more_info,...data.data};
                    setMoreInfo({...more_info,...data.data})
                    coverImages(concat_data)
                })
                .catch(err=>{
                    console.error(err);
                })
                break;        
            case 3:
                console.error("everything is not implemented yet");
                break;                
            default:
                break;
        }
        function coverImages(data) {
            data?.releases?.forEach(res=>{
                reqCoverReleaseById(res.id)
                .then(response=>{
                    console.log(response?.data?.images);
                    setCoverArt(cover_art.concat(response.data.images))
                })
                .catch(err=>{
                    console.log(err);
                })
            })
        }
    }, [modal_data]);
    function setModalState() {
        let i = document.querySelector("#modal_window");
        if (modal_is_open) {
            i.classList.add("modal")
            i.classList.remove("display_none")
        } else {
            i.classList.add("display_none")
        }
    }
    return (
        <div id="modal_window">
            <button className="modal_btn">x</button>
            <div className="modal_content">
                <h1>{modal_data.title}</h1>
                <h2>Informations</h2>
                {/* dispay all artist credit */}
                {more_info["artist-credit"]?.map((artist_credit,index)=>{
                    return <h3 key={index}>{artist_credit?.name}</h3>
                })}
                {/* release date */}
                {   <h4>{more_info["first-release-date"]}</h4>  }
                {more_info["relations"]?.map((relation,index)=>{
                    return <h3 key={index}>{relation?.title}</h3>
                })}
                {more_info["releases"]?.map((release,index)=>{
                    return <h3 key={index}>{release?.title}</h3>
                })}
                <h2>Cover Arts</h2>
                {
                    cover_art?.map((img,index)=>{
                        console.log(img);
                        return <img className="img_modal_cover_art" key={index+Math.random()} src={img.image} alt="pas d'image" />
                    })
                }
            </div>
        </div>
    )
}

export default Modal
