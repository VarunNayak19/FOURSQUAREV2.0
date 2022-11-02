import React from 'react'
import './hotelllist.css'
const HotelList = () => {
    const hotelListArr: any = [
        {
            id: "1",
            restaurantName: "Planet Cafe",
            cuisine: "Sandwiches",
            img: "indian-hotels",
            address: "5.3 km Manipal, Karnataka ",
            ratings: "8.3",
            lat: 13.359441129794174,
            lng: 74.7843856671331


        },
        {
            id: "2",
            restaurantName: "LX Brasserie",
            img: "indian-hotels",
            cuisine: "Indian",
            address: "Ramakrishna Lodge (Mosque Road), Udupi",
            ratings: "7.0",
            lat: 13.344270895681637,
            lng: 74.7498317266539


        },
        {
            id: "3",
            restaurantName: "hotel raj",
            img: "indian-hotels",
            cuisine: "Biriyani",
            address: "Ramakrishna Lodge (Mosque Road), Udupi",
            ratings: "4.0",
            lat: 13.38119376752108,
            lng: 74.73920614014705


        },
        {
            id: "4",
            restaurantName: "Manipal inn",
            img: "indian-hotels",
            cuisine: "Multi",
            address: "Ramakrishna Lodge (Mosque Road), Udupi",
            ratings: "8.0",
            lat: 13.350369268754815,
            lng: 74.7367857113113


        },
        {
            id: "5",
            restaurantName: "kidiyoor",
            img: "indian-hotels",
            cuisine: "Multi",
            address: "Ramakrishna Lodge (Mosque Road), Udupi",
            ratings: "8.0",
            lat: 13.34325014490527,
            lng: 74.74660688023435


        },
    ];
    const getData = async () => {

        const res = await fetch(
            `https://developers.zomato.com/api/v2.1/geocode?lat=13.3409&lon=74.7421`,
            {
                headers: {
                    Accept: "application/json",
                    "user-key": "5ffb698e3d9a8ea8d51fb8847c216058",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => localStorage.setItem("restdatafromapi", JSON.stringify(data.nearby_restaurants)));
    }

    getData()
    localStorage.setItem("REST", JSON.stringify(hotelListArr));
    const restapidets = JSON.parse(localStorage.getItem("restdatafromapi") || "[]")
    console.log('restapidets', restapidets);
    const retData: any = JSON.parse(localStorage.getItem("REST") || "[]");
    return (
        // <div className="listDiv">
        //     {retData.map((element: any, i: any) => {
        //         return (
        //             <div className="eachHotel">
        //                 <div className="hotelImage">
        //                     <img
        //                         src={require(`../../assets/${retData[i].img}.jpg`)}
        //                         alt="img"
        //                         className="hotelImg"
        //                     />
        //                 </div>
        //                 <div className="restaurantDetails">
        //                     <p>
        //                         <span>{retData[i].id}.</span>
        //                         {retData[i].restaurantName}
        //                     </p>
        //                     <p>{retData[i].cuisine}</p>
        //                     <p>{retData[i].address}</p>
        //                 </div>
        //                 <div className="ratings">{retData[i].ratings}</div>
        //             </div>
        //         );
        //     })}
        // </div>
        <div className="listDiv">
            {restapidets.map((element: any, i: any) => {
                return (
                    <div className="eachHotel">
                        <div className="hotelImage">
                            <img
                                src={restapidets[i].restaurant.thumb}
                                alt="img"
                                className="hotelImg"
                            />
                        </div>
                        <div className="restaurantDetails">
                            <p>
                                <span>{i + 1}.</span>
                                {restapidets[i].restaurant.name}
                            </p>
                            <p>{restapidets[i].restaurant.cuisines}</p>
                            <p>{restapidets[i].restaurant.location.address}</p>
                        </div>
                        <div className="ratings">{restapidets[i].restaurant.name}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default HotelList