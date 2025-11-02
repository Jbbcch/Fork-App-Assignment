import '/src/styles/Navbar.css';
import '/src/styles/Buttons.css';
import '/src/styles/Fonts.css';
import { useState } from 'react';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [logoHovered, setLogoHovered] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className='navbar'>
            <div className='logo-container' onMouseEnter={() => setLogoHovered(true)} onMouseLeave={() => setLogoHovered(false)}>
                <img src={ logoHovered ? '/src/assets/logo-hover.png' : 'logo.png'} className='logo' />
                <a className='montserrat'>FORKIO</a>
            </div>
            <div className='links montserrat'>
                <a href='#'>Overview</a>
                <a href='#'>About Fork</a>
                <a href='#'>Buying Options</a>
                <a href='#'>Support</a>
            </div>
            <button className='button-purple montserrat'>Buy Now</button>

            <div className='dropdown'>
                <button onClick={toggleDropdown}>
                    <div className="rectangle small"></div>
                    <div className="rectangle large"></div>
                    <div className="rectangle large"></div>
                </button>
                {dropdownOpen && (
                <div className='dropdown-menu montserrat'>
                    <a href='#'>Overview</a>
                    <a href='#'>About Fork</a>
                    <a href='#'>Buying Options</a>
                    <a href='#'>Support</a>
                </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;