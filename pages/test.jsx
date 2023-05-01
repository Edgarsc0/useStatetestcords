import { useEffect, useState } from "react"

const Test = () => {
    const [coords, setCoords] = useState([]);

    useEffect(() => {
        const success = (position) => {
            console.log(position);
            setCoords([...coords, [position.coords.latitude, position.coords.longitude]]);
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])
    return (
        <>
            {
                coords.map(cords=>(
                    <><p>{JSON.stringify(cords)}</p><br></br></>
                ))
            }
        </>
    );
}

export default Test;