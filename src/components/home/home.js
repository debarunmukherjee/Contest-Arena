import React, { useState, useEffect } from "react";

import Particles from "react-particles-js";
import Typist from "react-typist";

import "./home.css";

const Home = () => {
	const [count, setCount] = useState(1);

	useEffect(() => {
		// document.title = `You clicked ${count} times`;
		console.log("Count: " + count);
		setCount(1);
	}, [count]);

	const stopDelay = () => {
		setTimeout(() => {
			setCount(0);
		}, 1000);
	};
	return (
		<div className="particle-container row">
			<div className="col-md-6">
				<Particles
					params={{
						fps_limit: 28,
						particles: {
							number: {
								value: 200,
								density: {
									enable: false
								}
							},
							line_linked: {
								enable: true,
								distance: 30,
								opacity: 0.4
							},
							move: {
								speed: 1
							},
							opacity: {
								anim: {
									enable: true,
									opacity_min: 0.05,
									speed: 2,
									sync: false
								},
								value: 0.4
							}
						},
						polygon: {
							enable: true,
							scale: 0.5,
							type: "inline",
							move: {
								radius: 10
							},
							url: "/small-deer.2a0425af.svg",
							inline: {
								arrangement: "equidistant"
							},
							draw: {
								enable: true,
								stroke: {
									color: "rgba(255, 255, 255, .2)"
								}
							}
						},
						retina_detect: false,
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "bubble"
								}
							},
							modes: {
								bubble: {
									size: 6,
									distance: 40
								}
							}
						}
					}}
				/>
			</div>
			<div className="col-md-6">
				<div className="heading-primary">CONTEST</div>
				<div className="heading-secondary">Arena</div>
				<div className="loop-text">
					{count ? (
						<Typist avgTypingDelay={50} onTypingDone={stopDelay}>
							<span>
								Delve yourself into the battlefield of coding!
							</span>
							<Typist.Backspace count={46} delay={800} />
							<span> printf("Begin the fight!")</span>
						</Typist>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;