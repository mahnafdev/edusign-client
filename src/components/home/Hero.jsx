import { Link } from "react-router";
import HeroImage from "../../assets/hero.jpg";

const Hero = () => {
	return (
		<section
			id="hero"
			className="max-w-8xl mx-auto mt-8 space-y-12"
		>
			{/* Hero Content (above) */}
			<div
				id="hero-content"
				className="flex items-center gap-x-24 max-w-5/6 mx-auto"
			>
				{/* Slogan Heading at the left-side */}
				<h1 className="text-5xl font-bold leading-snug">
					The Smarter Way to Solve and Learn Together.
				</h1>
				{/* Subtext & Call-To-Action at the right-side */}
				<div className="space-y-4">
					<p className="leading-relaxed">
						Sign out from the exhausted education system. Sign in to the smarter one
						by EduSign. Get smarter with our Assignment-based group-study system.
					</p>
					<Link
						to="/assignments"
						target="_blank"
					>
						<button
							type="button"
							className="px-5 py-3 bg-primary hover:bg-primary-dark text-light font-medium rounded-xl hover:rounded-full cursor-pointer"
						>
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
				<img
					src={HeroImage}
					alt="Hero Image"
					className="w-full h-full object-cover object-center rounded-tr-[5rem] rounded-tl-2xl rounded-br-3xl rounded-bl-[4rem]"
				/>
			</div>
		</section>
	);
};

export default Hero;
