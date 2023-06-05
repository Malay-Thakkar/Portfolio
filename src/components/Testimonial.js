import mt from "../assets/img/manansir.jpeg";
import dt from "../assets/img/mitu.JPG";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
export const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
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
                                <div className="item">
                                    <img src={mt} alt="testimonial1" />
                                    <h5>Prof. Manan Thakkar</h5>
                                    <p>"Malay Thakkar is an exceptional student in the field of computer engineering, as acknowledged by his professor and project guide. Throughout his academic journey at U V Patel College of Engineering, Malay showcased a deep passion for the subject, a remarkable aptitude for problem-solving, and an unwavering commitment to excellence. With a thirst for knowledge and a strong grasp of cutting-edge technologies, he consistently sought opportunities to expand his understanding. Malay's project under my guidance displayed his exceptional research and development skills, coupled with his creative problem-solving approach. Furthermore, his strong teamwork, communication, and reliability make him an invaluable asset to any organization. Overall, Malay Thakkar's dedication, exceptional skills, and professional attitude position him for continued success and significant contributions in the field of computer engineering."</p>
                                </div>
                                <div className="item">
                                    <img src={dt} alt="testimonial1" />
                                    <h5>Dhrumil Thakkar</h5>
                                    <p>"Malay Thakkar always be ready to accept the challenges, very enthusiastic, loving the programming and adapt new task quickly with positive  attitude. Hope in future, will be at the place where he would to be. Go ahead and good luck."</p>
                                </div>
                                {/* <div className="item px-5">
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
                                </div> */}
                              
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="img1" />
        </section>
    )
}
