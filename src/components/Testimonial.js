import bg from "../assets/img/bg-3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
export const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="testimonial" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="testimonial-bx wow zoomIn">
                            <h2>Testimonial</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme testimonial-slider">
                                <div className="item px-5">
                                    <img src={bg} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga architecto molestias, nesciunt earum natus maiores omnis ab ut neque laboriosam. Cum deserunt distinctio obcaecati, suscipit enim repellendus eos voluptatem?</p>
                                </div>
                                <div className="item px-5">
                                    <img src={bg} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga architecto molestias, nesciunt earum natus maiores omnis ab ut neque laboriosam. Cum deserunt distinctio obcaecati, suscipit enim repellendus eos voluptatem?</p>
                                </div>
                                <div className="item px-5">
                                    <img src={bg} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga architecto molestias, nesciunt earum natus maiores omnis ab ut neque laboriosam. Cum deserunt distinctio obcaecati, suscipit enim repellendus eos voluptatem?</p>
                                </div>
                                <div className="item px-5">
                                    <img src={bg} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga architecto molestias, nesciunt earum natus maiores omnis ab ut neque laboriosam. Cum deserunt distinctio obcaecati, suscipit enim repellendus eos voluptatem?</p>
                                </div>
                                <div className="item px-5">
                                    <img src={bg} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga architecto molestias, nesciunt earum natus maiores omnis ab ut neque laboriosam. Cum deserunt distinctio obcaecati, suscipit enim repellendus eos voluptatem?</p>
                                </div>
                                <div className="item px-5">
                                    <img src={bg} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fuga architecto molestias, nesciunt earum natus maiores omnis ab ut neque laboriosam. Cum deserunt distinctio obcaecati, suscipit enim repellendus eos voluptatem?</p>
                                </div>
                              
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="img1" />
        </section>
    )
}
