import '/src/styles/Header.css';
import '/src/styles/Fonts.css';
import '/src/styles/Buttons.css';

function Header() {
    return(
        <div className='outer'>
            <div className='bg-laptop'>
                <h1 className='big-white montserrat'>Fork App</h1>
                <p className='normal-blurple lato'>A real gamechanger in the world of web development</p>
                <p className='smol-grey montserrat'>V. 2.8 FOR MAC AND WINDOWS</p>
            </div>
            <div className='lower-header'>
                <button className='button-purple montserrat700'>Download For Free Now</button>
                <p className="bottom-text montserrat">Unlimited 30-Days Trial Period</p>
            </div>
        </div>
        
    );
}

export default Header;