import './header.css'
import { useState } from 'react';
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, apiOptions } from '../../api';
const Header = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return (

            fetch(`${GEO_API_URL}/cities?minPopulation=100&namePrefix=${inputValue}`, apiOptions)

                .then(response => response.json())
                .then((response) => {
                    return {
                        options: response.data.map((city) => {
                            return {
                                latgeodb: city.latitude,
                                longgeodb: city.longitude,
                                label: `${city.name}, ${city.countryCode}`,
                                // latgeodb: city.latitude,
                                // longgeodb: city.longitude,
                                // label: `${city.name}, ${city.countryCode}`,
                            }
                        })
                    }
                })

                .catch(err => console.error(err)));
    }

    const handleOnchange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <div className='headerMainContent'>
            <div className="bluediv">
                <div className="logo">
                    <img src={require("../../assets/logo.png")} alt="Foursquare" />
                </div>
                <div className="searchBar">
                    <img src={require("../../assets/Shape.png")} alt="" className='searchBarImg' />
                    <div className='paginateddiv'>
                        <AsyncPaginate
                            placeholder="Search"
                            debounceTimeout={600}
                            value={search}
                            onChange={handleOnchange}
                            loadOptions={loadOptions}
                            className='searchBarInput'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header