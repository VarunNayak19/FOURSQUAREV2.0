import React from 'react'
import Header from '../../components/header/header'
import HotelList from '../../components/hotelList/hotelList'
import Maps from '../../components/maps/maps'

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HotelList />
            <Maps />
        </div>
    )
}

export default LandingPage