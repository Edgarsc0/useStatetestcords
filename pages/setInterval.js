import { useEffect, useState } from "react";

const SetInterval = () => {
    const [coords,setCoords]=useState([]);
    useEffect(()=>{
        setInterval(()=>{
            navigator.geolocation.getCurrentPosition((pos)=>{
                setCoords([...coords,[pos.coords.latitude,pos.coords.longitude]]);
            });
        },2000);
    });
    return (
        <>
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