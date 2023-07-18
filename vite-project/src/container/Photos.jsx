import { useEffect, useState } from "react";
const photo = (props) =>{
    const [photo,setphoto] = useState({})
    const getphoto = async (id) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos/1'+id)
        .then((res )=> res.json())
        .catch((error)=>console.error("error"));
        setphoto(data)
     };
    useEffect(() =>{
        console.log('component di-render');
    },[])

    return(
        <img 
        src={props.src}
        alt={props.alt}
        style={{
            width:100,
            height: 100,
            objectFit:"contain"
        }}
        />
    );
};
export default photo;