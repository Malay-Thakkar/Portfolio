import React from 'react'

const contect = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact Me</h2>
                    <div className="columns">
                        <div className="col col-50">
                            <h3>Don't be shy!</h3>
                            <h2>Do you have any Project? Let's Talk</h2>
                            <br />
                            <div className="row">
                                <i className="fas fa-user"> Name</i>
                                <div className="info">
                                    <div className="sub-title">Malay Thakkar</div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <i className="fas fa-map-marker-alt"> Address</i>
                                <div className="info">
                                    <div className="sub-title">Vadnagar,GUJRAT</div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <i className="fas fa-envelope"> Email</i>
                                <div className="info">
                                    <div className="sub-title">its.malaythakkar@gmail.com</div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <i className="fas fa-phone"> Phone No.</i>
                                <div className="info">
                                    <div className="sub-title">8320135247</div>
                                </div>
                            </div>
                            <br />
                            {/* <div className="social">
                                <a href="www.linkedin.com/in/malay-thakkar" target="_blank"><span className="fab fa-linkedin"></span></a>
                                <a href="https://github.com/Malay-Thakkar" target="_blank"><span className="fab fa-github"></span></a>
                                <a href="https://www.instagram.com/thakkar_malay/" target="_blank"><span className="fab fa-instagram-square"></span></a>
                            </div> */}
                        </div>
                        <div className="col col-50">
                            <div className="container">
                                <h2>Message</h2>
                                <div className="contact-form">
                                    <form className='form-group' action='mailto:its.malaythakkar@gmail.com'>
                                    <div className="field">
                                        <label htmlFor="name"> Name:  </label>
                                        <input type="text" className="form-control" name="Name" id="Name" placeholder="Name" required /><br />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email id:  </label>
                                        <input type="email" className="form-control" name="Sender" id="Sender" placeholder="Email" required /><br />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="subject">Subject: </label>
                                        <input type="text" className="form-control" name="Subject" id="Subject" placeholder="Subject" required /><br />
                                    </div>
                                    <label htmlFor="message">Message: </label>
                                    <textarea name="Message" cols="30" rows="5" className="form-control" id="Message" placeholder="Message" required /><br />

                                    <input type="submit" value="Send" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contect;