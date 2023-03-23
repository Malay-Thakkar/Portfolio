import React from 'react'

const Profile = () => {

    return (
        <>
            <section className="about mt-5" id="#home">
                <div className="max-width">
                    <div className="about-content">
                        <div className="column left">
                            <divimg>
                                <img className="image" src="./portfolio_pngfile_2.png" alt="" />
                            </divimg>

                        </div>
                        <div className="column right">
                            <div className="text">Hi There,<br /> I am Malay Thakkar<span className="typing-2"></span></div>
                            <h2 className="h2">Full stack developer</h2>
                            <a className='btn' href="./img/Resume_Malay-Thakkar.pdf" target="_blanck">Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile