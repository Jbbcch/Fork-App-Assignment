import "/src/styles/Testimonials.css";
import "/src/styles/Fonts.css";

function Testimonials() {
    const testimonials_list = [
        {
        image: '/testimonial_icons/smashmag.png', 
        desc: 'Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et pulvinar venenatis. '
        },
        {
        image: '/testimonial_icons/codrops.png', 
        desc: 'Donec euismod dolor ut ultricies consequat. Vivamus urna ipsum, rhoncus molestie neque ac, mollis eleifend nibh.'
        },
        {
        image: '/testimonial_icons/doubleew.png', 
        desc: 'In efficitur in velit et tempus. Duis nec odio dapibus, suscipit erat fringilla, imperdiet nibh. Morbi tempus auctor felis ac vehicula. '
        },
        {
        image: '/testimonial_icons/buddha.png', 
        desc: 'Sed vestibulum scelerisque urna, eu finibus leo facilisis sit amet. Proin id dignissim magna. Sed varius urna et pulvinar venenatis. '
        },
        {
        image: '/testimonial_icons/crebloq.png', 
        desc: 'Praesent ut eros tristique, malesuada lectus vel, lobortis massa. Not a loop. '
        },
        {
        image: '/testimonial_icons/thenewswetwork.png', 
        desc: 'Fusce pharetra erat id odio blandit, nec pharetra eros venenatis. A spiral.'
        },
    ];

    return(
        <div className="outer-container">
            <h1 className="container-name montserrat">People Who Are Talking About Fork</h1>
            <div className="grid-container lato">
                {testimonials_list.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <div className="testimonial-image">
                            <img src={testimonial.image} />
                        </div>
                        <p className="testimonial-desc">{testimonial.desc}</p>
                    </div>
                ))}
            </div>
            <p className="footer-text lato">
                Duis lobortis arcu sed arcu tincidunt feugiat. Nulla nisi mauris, facilisis vitae 
                aliquet id, imperdiet quis nibh. Donec eget elit eu libero tincidunt consequat nec 
                elementum orci. Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus.
            </p>
            <hr className="divider"/>
        </div>
    );
}

export default Testimonials;