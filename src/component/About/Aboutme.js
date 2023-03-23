import React from 'react'

const Aboutme = () => {
  return (
    <section className="about_1" id="about">
        <div className="max-width">
            <h2 className="title">About</h2>
            <div className="about-content">
                <p>I am pursuing Semester-6 in Computer Engineering at Ganpat university, I am looking for a great opportunity of learning the various concept of Problem solving, Data structure, and I want to set a career as a Software developer. I have
                    many skills like Leadership, good problem-solving skills, ability to perform well in a team, Hard-working, presentation & quick Learner.</p>
                <br />
            </div>
        
            <section className="skills">
                <h2 style={{color: "aqua"}}>skills</h2><br /> 
                <div className="progress-circle-container">
                    <div className="progress-circle progress-70"><span>70%<br />C++</span></div>
                    <div className="progress-circle progress-70"><span>70%<br />C</span></div>
                    <div className="progress-circle progress-65"><span>65%<br />JAVA</span></div>
                    <div className="progress-circle progress-70"><span>70%<br />HTML</span></div>
                    <div className="progress-circle progress-60"><span>60%<br />CSS</span></div>
                    <div className="progress-circle progress-60"><span>60%<br />Bootstrep</span></div>
                    <div className="progress-circle progress-50"><span>50%<br />JavaScript</span></div>
                    <div className="progress-circle progress-50"><span>50%<br />C#</span></div>
                    <div className="progress-circle progress-50"><span>50%<br />Python</span></div>
                </div>
                
            </section>
            <div>
                <h2 style={{color: "aqua"}}>Certificate</h2><br />
                <p style={{color: "hsl(57, 86%, 81%)"}}>WEB DESIGN FOR EVERYBODY: BASICS OF WEB DEVELOPMENT & CODING, COURSERA, (SPECIALIZATION)</p>
                    <p >Skills: Web Development, Cascading Style Sheets (CCS), Html 5, JavaScript, Responsive Web Design</p> Link:
                    <a href="https://coursera.org/share/41730d3613205bb531eeaa5f745ab228">Credential</a>
                <br />
                <br />
                <br />

                <p  style={{color: "hsl(57, 86%, 81%)"}}>Blockchain Basics</p>
                    <p>Skills: Ethereum, Cryptography, Blockchains, Bitcoin</p>
                Link:<a href="https://coursera.org/share/3f02efe382228a09b56a4c0e0e88b073">Credential</a>
                <br />
                

                {/* <p>Smart Contracts
                    <p >Skills: Cryptocurrency, Blockchain, Solidity, Smart Contract, Remix IDE</p> Link:
                    <a href="https://coursera.org/share/fe88fccde589f1b93d5b59674f35db7e">Credential</a>
                </p><br />

                <p>Decentralized Applications (Dapps)
                    <p > Skills: MetaMask client, Blockchain, Decentralized Applications, Truffle IDE, Smart Contract</p> Link:
                     <a href="https://coursera.org/share/cc6e04e2f14542c6d3ca104ab59d82ed">Credential</a>
                </p><br />

                <p>PROGRAMMING FUNDAMENTALS, COURSERA
                    <p > Skills: -Algorithms, Programming Language Concepts, Problem Solving, C Programming
                    </p> LINK: <a href="https://coursera.org/share/376fc4389f30046e587668295d0ae630">Credential</a></p>
                <br /> */}
            </div>
        </div>
    </section>
  )
}

export default Aboutme