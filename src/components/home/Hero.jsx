import { Link } from "react-router";
import HeroImage from "../../assets/hero.jpg";
import { motion } from "motion/react";

const Hero = () => {
	return (
		<section
			id="hero"
			className="max-w-8xl mx-auto mt-8 space-y-10"
		>
			{/* Hero Content (above) */}
			<div
				id="hero-content"
				className="flex items-center gap-x-24 max-w-5/6 mx-auto"
			>
				{/* Slogan Heading at the left-side */}
				<motion.h1
					className="text-5xl font-bold leading-snug"
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
				<div className="space-y-4">
					<p className="leading-relaxed">
						Sign out from the exhausted education system. Sign in to the smarter one
						by EduSign. Get smarter with our Assignment-based group-study platform.
					</p>
					<Link
						to="/assignments"
						target="_blank"
					>
						<button
							type="button"
							className="px-4 py-3 bg-primary text-light font-medium rounded-full cursor-pointer border border-b-4 border-blue-700 overflow-hidden relative hover:border-t-4 hover:border-b active:brightness-115 duration-250 group"
						>
							<span className="bg-blue-400 shadow-blue-400 absolute -top-[35%] left-0 inline-flex w-48 h-1 rounded-md opacity-50 group-hover:top-[105%] duration-400 shadow-[0_0_0.5rem_0.5rem_rgba(0,0,0,0.3)]"></span>
							Explore Assignments
						</button>
					</Link>
				</div>
			</div>
			{/* Hero Image (below) */}
			<div
				id="hero-image"
				className="h-[65vh]"
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
