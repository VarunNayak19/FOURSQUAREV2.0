import { useState } from 'react'
import Header from '../../components/header/header'
import HotelList from '../../components/hotelList/hotelList'
import Maps from '../../components/maps/maps'

const LandingPage = () => {
    // const [hotellistdiv, sethotellistdiv] = useState(false)
    const [setlatgeodb, setsetlatgeodb] = useState({})
    const handleOnSearchChange = (searchData: any) => {
        // sethotellistdiv(true)
        const latgeodb = searchData;
        setsetlatgeodb(latgeodb)
        console.log('latgeodb', latgeodb)
    }
    return (
        <div className='landingPage'>
            <Header onSearchChange={handleOnSearchChange} />
            {/* {
                hotellistdiv && <HotelList latlong={setlatgeodb} />
            } */}
            <HotelList latlong={setlatgeodb} />
            <Maps />
        </div>
    )
}

export default LandingPage