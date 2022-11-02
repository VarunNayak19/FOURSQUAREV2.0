import './header.css'
const Header = () => {
    return (
        <div className='headerMainContent'>
            <div className="bluediv">
                <div className="logo">
                    <img src={require("../../assets/logo.png")} alt="Foursquare" />
                </div>
                <div className="searchBar">
                    <img src={require("../../assets/Shape.png")} alt="" className='searchBarImg' />
                    <input type="text" className='searchBarInput' placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Header