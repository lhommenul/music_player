import {React,useEffect} from 'react'
const Images = (props) => {
    useEffect(() => {
        console.log(props.images);
        return () => {
            
        };
    }, [props.images]);
    return (
        <div>
        </div>
    )
}
export default Images