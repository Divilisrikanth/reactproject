import React from 'react';
import logo from '../../images/amazonLogo.JPG';
import selectLocation from '../../images/selectLocation.JPG';
const Header = () => {
    return (
        <div className="frontbanner">
            <div className='topRow'>
                <a><img src={logo} className="sitelogo"></img></a>
                <button className='selectAddressBtn'>
                    <img src={selectLocation} className='selectAddressImg'></img>
                    <div className='selectAddressDiv'>
                        <div className='selectAddressTextTop'>Hello</div>
                        <div className='selectAddressTextBottom'>Select  your Address</div>
                    </div>
                </button>
                <div className='search-container'>
                    <button className='allSearchBtn'>
                        <img className='allSearchImg'></img>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Header;