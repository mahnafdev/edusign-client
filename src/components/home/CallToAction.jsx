import { motion } from "motion/react";
import Button from "../shared/Button";
import useAuthContext from "../../hooks/useAuthContext";
import { Link } from "react-router";

const CallToAction = () => {
	const { user } = useAuthContext();
	return (
		<motion.section
			id="call-to-action-section"
			className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-8xl mx-auto mt-40 space-y-12"
			initial={{
				scale: 0.4,
				opacity: 0,
			}}
			whileInView={{
				scale: 1,
				opacity: 1,
			}}
			transition={{
				duration: 1,
				type: "spring",
			}}
		>
			{/* Call To Action Card */}
			<div className="md:max-w-lg lg:max-w-3xl 2xl:max-w-5xl mx-auto bg-neutral-900 border border-blue-300 dark:border-blue-900 p-8 rounded-3xl space-y-8 md:space-y-6">
				<div className="space-y-3">
					{/* Section Heading */}
					<h3 className="text-2xl md:text-3xl font-bold text-center">
						Ready to{" "}
						<span className="text-primary-dark dark:text-primary-light">
							start studying
						</span>
						?
					</h3>
					{/* Subtext */}
					<p className="text-center text-lg font-medium">
						Start studying together or explore some assignments first.
					</p>
				</div>
				{/* Buttons */}
				<div className="flex justify-center gap-x-4 gap-y-3">
					{user ? (
						<Link to="/assignments">
							<Button>Start Studying</Button>
						</Link>
					) : (
						<>
							<Link to="/signup">
								<Button>Sign Up</Button>
							</Link>
							<Link to="/assignments">
								<Button>Explore Assignments</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</motion.section>
	);
};

export default CallToAction;
