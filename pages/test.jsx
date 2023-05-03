import { useEffect, useState } from "react"

const Test = () => {
    const [id, setId] = useState();
    const [coords, setCoords] = useState([]);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        const sucess = (position) => {
            setCoords([...coords, [position.coords.latitude, position.coords.longitude]]);
        }
        const error = (err) => {
            setErrors([...errors,[err]]);
        }
        const id = navigator.geolocation.watchPosition(sucess, error, { enableHighAccuracy: true, timeout: 5000 });
        setId(id);
        console.log(coords);
    }, [coords])
    return (
        <>
            <div>{errors.map(item => (
                <><p>{JSON.stringify(item)}</p><br></br></>
            ))}</div>
            <h1>Longitud del estado: {coords.length}</h1>
            <hr></hr>
            <br></br>
            {coords.map(item => (
                <><p>{JSON.stringify(item)}</p><br></br></>
            ))}
        </>
    );
}

export default Test;