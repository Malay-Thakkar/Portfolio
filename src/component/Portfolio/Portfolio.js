import React from 'react'

const Portfolio = () => {


    return (
        <>
            <section className="contact">
                <div className="max-width">
                    <h2 className="title" >Portfolio</h2>
                    <div className="row">
                        <div className="column">
                            <div className="content" style={{padding: "20px"}}>
                                <a href="https://malay-thakkar.github.io/Navin-Sarva-Vidyalaya/Navin%20Sarva%20Vidyalaya/index.html">
                                    <img src="https://github.com/Malay-Thakkar/Portfolio/blob/master/public/img/p1.PNG?raw=true" alt="School wesite" style={{width:"100%"}} />
                                    <h3>Scool website</h3>
                                    <p>This website is my School website. This website provides information about the school. There you can contact School or apply for admission.<br /><br /></p>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content" style={{padding: "35px"}}>
                                <a href="https://github.com/Malay-Thakkar/Business-Application">
                                    <img src="./img/p2.PNG" alt="Business Application" style={{width:"100%"}} />
                                    <h3>Business Application</h3>
                                    <p>This Application is for Making a bill, Notes, and calculating the numeric. This Application made in C#</p>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <a href="https://github.com/Malay-Thakkar/Notepad">
                                    <img src="./img/p3.PNG" alt="Notepad" style={{width:"100%"}} />
                                    <h3>Notepad</h3>
                                    <p>I made Notepad where you can make notes and perform some operations like copy, paste, undo, redo, save, save-as, open, close many more. </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="content">
                                <a href="https://malay-thakkar.github.io/Computer-Engineering-Study-Material/Computer%20Engineering%20Study%20Material.html">
                                    <img src="./img/p4.PNG" alt="Computer Engineering study material" style={{width:"100%"}} />
                                    <h3>Computer Engineering study material</h3>
                                    <p>This website provides material regarding computer Engineering. There I uploaded my all practical as well as lecture ppt</p>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <a href="https://malay-thakkar.github.io/Computer-Engineering-Study-Material.github.io/project/Computer%20Engineering%20Study%20Material">
                                    <img src="./img/p6.PNG" alt="old one Computer Engineering study material" style={{width:"100%"}} />
                                    <h3>old one Computer Engineering study material</h3>
                                    <p>This website provides material regarding computer Engineering. There I uploaded my all practical as well as lecture ppt</p>
                                </a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content" style={{paddingBottom: "3rem"}}>
                                <a href="https://github.com/Malay-Thakkar/Problem-Solving">
                                    <img src="./img/p5.PNG" alt="Ds question" style={{width:"100%"}} />
                                    <h3>Data-structure question</h3>
                                    <p>This is my GitHub repo. There I have uploaded an important question regarding data structur</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio