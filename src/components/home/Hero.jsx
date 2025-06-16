import { Link } from "react-router";
import HeroImage from "../../assets/hero.jpg";
import { motion } from "motion/react";
import Button from "../shared/Button";

const Hero = () => {
	return (
		<section
			id="hero"
			className="lg:max-w-5xl 2xl:max-w-8xl mx-auto mt-8 space-y-10"
		>
			{/* Hero Content (above) */}
			<div
				id="hero-content"
				className="flex items-center lg:gap-x-16 2xl:gap-x-24 2xl:max-w-5/6 mx-auto"
			>
				{/* Slogan Heading at the left-side */}
				<motion.h1
					className="lg:text-4xl 2xl:text-5xl font-bold leading-snug"
					initial={{
						scale: 0.5,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
						color: [
							"#1e90ff",
							"#20b2aa",
							"#9acd32",
							"#228b22",
							"#eab530",
							"#ff6500",
							"#5a4abd",
							"#4169e1",
						],
					}}
					transition={{
						scale: {
							duration: 1,
						},
						opacity: {
							duration: 1,
						},
						color: {
							duration: 15,
							repeat: Infinity,
						},
					}}
				>
					The Smarter Way to Solve and Learn Together
				</motion.h1>
				{/* Subtext & Call-To-Action at the right-side */}
				<div className="max-w-1/2 space-y-4">
					<p className="leading-relaxed">
						Sign out from the exhausted education system. Sign in to the smarter one
						by EduSign. Get smarter with our Assignment-based group-study platform.
					</p>
					<Link
						to="/assignments"
						target="_blank"
					>
						<Button fullRounded>Explore Assignments</Button>
					</Link>
				</div>
			</div>
			{/* Hero Image (below) */}
			<div
				id="hero-image"
				className="lg:h-[57vh] 2xl:h-[65vh]"
			>
				<motion.img
					src={HeroImage}
					alt="Hero Image"
					className="w-full h-full object-cover object-center rounded-tr-[5rem] rounded-tl-2xl rounded-br-3xl rounded-bl-[4rem]"
					animate={{
						y: [0, -20, 20, 0],
					}}
					transition={{
						duration: 9,
						repeat: Infinity,
					}}
				/>
			</div>
		</section>
	);
};

export default Hero;
