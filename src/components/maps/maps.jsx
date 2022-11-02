import { useState } from 'react'
import './map.css'
import { useNavigate } from "react-router-dom"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
// import {showPosition,showError} from 'geolocation'
const Maps = () => {
    const [index, setindex] = useState(0)
    localStorage.setItem("index", index)
    const navigate = useNavigate();
    const { isLoaded } = useLoadScript({
        googlMapsApiKey: process.env.API_KEY
    })
    var geolocation = require('geolocation')
    const homeLat = 13.37919
    const homeLong = 74.74050
    const [lat, setlat] = useState(homeLat)
    const [long, setlong] = useState(homeLong)
    // geolocation.getCurrentPosition(function (err, position) {
    //     if (err) throw err
    //     setlat(position.coords.latitude)
    //     setlong(position.coords.longitude)
    // })
    const loc = {
        lat: lat,
        lng: long
    }

    if (!isLoaded) {
        return <h1>loading...</h1>
    }
    const restData = JSON.parse(localStorage.getItem("REST") || "[]");
    let locm = []
    restData.map((el, i) => {
        locm.push({
            lat: restData[i].lat,
            lng: restData[i].lng
        })
    })
    const gotoreview = (i) => {
        setindex(i)
        console.log(locm[i])
        setlat(locm[i].lat)
        console.log(lat);
        setlong(locm[i].lng)
        console.log(long);
        navigate(`/reviews/${i}`)
        console.log(index)
    }
    const getlatlongfromapi = JSON.parse(localStorage.getItem("restdatafromapi"));
    console.log(getlatlongfromapi)
    let locf = []
    getlatlongfromapi.map((el, i) => {
        locf.push({
            lat: JSON.parse(getlatlongfromapi[i].restaurant.location.latitude),
            lng: JSON.parse(getlatlongfromapi[i].restaurant.location.longitude)
        })
    })
    console.log("locf", locf);
    return (
        <div className='map'>
            <GoogleMap
                center={loc}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: "100%" }}
            >
                <Marker position={loc} />
                {getlatlongfromapi.map((el, i) => {
                    return (
                        // <Marker position={locm[i]} label={`${i+1}`} onClick={()=>{setindex(i)}}/>
                        // <Marker position={locm[i]} label={`${i + 1}`} onClick={() => gotoreview(i)} />
                        <Marker position={locf[i]} label={`${i + 1}`} onClick={() => gotoreview(i)} />
                    )
                })}
            </GoogleMap>
        </div >
    )
}

export default Maps