import "/src/styles/Features.css";
import "/src/styles/Fonts.css";

function Features() {
    return(
        <div className="container">
            <div className="left-column">
                <div className="inner-row">
                    <div className="image-container">
                        <img src="icons/icon1.png" style={{ width: '111px', height: '64px' }}/>
                    </div>
                    
                    <div className="inner-column montserrat">
                        <h2>Creatred to Make The Web Better</h2>
                        <p>Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet vulputate dignissim. Sed id metus id quam auctor molestie eget ut augue. Why are you inspecting a webpage with a magnifying glass.</p>
                    </div>
                </div>
                <div className="inner-row">
                    <div className="image-container">
                        <img src="icons/icon2.png" style={{ width: '90px', height: '80px' }}/>
                    </div>

                    <div className="inner-column montserrat">
                        <h2>Incredibly Powerful Tool</h2>
                        <p>Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Microwave setting, heat up for 5 minutes.</p>
                    </div>
                </div>
                <div className="inner-row">
                    <div className="image-container">
                        <img src="icons/icon3.png" style={{ width: '60px', height: '84px' }}/>
                    </div>

                    <div className="inner-column montserrat">
                        <h2>Experimental Stuff</h2>
                        <p>Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Gonna drink unknown chemicals.</p>
                    </div>
                </div>
                <div className="inner-row">
                    <div className="image-container">
                        <img src="icons/icon4.png" style={{ width: '71px', height: '71px' }}/>
                    </div>
                    <div className="inner-column montserrat">
                        <h2>Creatred to Make The Web Better</h2>
                        <p>Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Time is ticking.</p>
                    </div>
                </div>
            </div>
            <div className="right-column montserrat">
                <h1>&lt;Here is what you get&gt;</h1>
                <img src="editor.png" />
            </div>
        </div>
    );
}

export default Features;