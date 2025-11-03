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
            <div className='logo-container' onMouseEnter={() => setLogoHovered(true) } onMouseLeave={() => setLogoHovered(false)}>
                <img src='logo.png' className={`logo${logoHovered ? '-hide' : ''}`} />
                <img src='/src/assets/logo-hover.png' className={`logo${logoHovered ? '' : '-hide'}`} />
                <a className='montserrat700'>FORKIO</a>
            </div>
            <div className='links montserrat700'>
                <a href='#'>Overview</a>
                <a href='#'>About Fork</a>
                <a href='#'>Buying Options</a>
                <a href='#'>Support</a>
            </div>
            <button className='button-purple montserrat700'>Buy Now</button>

            <div className='dropdown'>
                <button onClick={toggleDropdown}>
                    <div className={`rectangle small ${dropdownOpen ? 'open' : ''}`}></div>
                    <div className={`rectangle large ${dropdownOpen ? 'open' : ''}`}></div>
                    <div className={`rectangle large ${dropdownOpen ? 'open' : ''}`}></div>
                </button>
                {dropdownOpen && (
                <div className='dropdown-menu montserrat700'>
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