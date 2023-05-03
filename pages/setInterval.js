import { useEffect, useState } from "react";

const SetInterval = () => {
    const [coords,setCoords]=useState([]);
    useEffect(()=>{
        setInterval(()=>{
            navigator.geolocation.getCurrentPosition((pos)=>{
                setCoords([...coords,[pos.coords.latitude,pos.coords.longitude]]);
            });
        },5000);
        console.log(coords);
    },[coords]);
    return (
        <>
        <h1>Longitud del estado: {coords.length}</h1>
        {
            coords.map(item=>(
                <>
                    <p>{JSON.stringify(item)}</p>
                    <br></br>
                </>
            ))
        }
        </>
    )
    
}
export default SetInterval;