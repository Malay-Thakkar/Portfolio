import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Portfolio = () => {


	return (
		<>
			<section class="contact">
				<div class="max-width">
					<h2 class="title">Portfolio</h2>
					<Carousel>
						<Carousel.Item interval={1000}>
							<div className="progress-circle-container">
								<div className="progress-circle progress-70"><span>70%<br />C++</span></div>
							</div>
						</Carousel.Item>
						<Carousel.Item interval={500}>
						<div className="progress-circle-container">
								<div className="progress-circle progress-70"><span>70%<br />C++</span></div>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="progress-circle-container">
								<div className="progress-circle progress-70"><span>70%<br />C++</span></div>
							</div>
						</Carousel.Item>
					</Carousel>

				</div>
			</section>
		</>
	)
}

export default Portfolio