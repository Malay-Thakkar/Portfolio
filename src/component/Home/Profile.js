import React from 'react'

const Profile = () => {

    return (
        <>
            <section className="about mt-5" id="#home">
                <div className="max-width">
                    <div className="about-content">
                        <div className="column left">
                            <img  className="image"src="https://github.com/Malay-Thakkar/Portfolio/blob/master/public/portfolio_pngfile_2.png?raw=true" alt="" />
                        </div>
                        <div className="column right">
                            <div className="text">Hi There,<br /> I am Malay Thakkar<span className="typing-2"></span></div>
                            <h2 className="h2">Full stack developer</h2>
                            <a className='btn' href="https://drive.google.com/file/d/1tL_-LtxU4_E_7AH6iedtfXC-pPWBA5jx/view?usp=sharing" target="_blanck">Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile