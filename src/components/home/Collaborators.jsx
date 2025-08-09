// Import all institutions/companies logo
import EdemyLight from "../../assets/collaborators/edemy-light.png";
import EdemyDark from "../../assets/collaborators/edemy-dark.png";
import UILight from "../../assets/collaborators/ui-light.png";
import UIDark from "../../assets/collaborators/ui-dark.png";
import JWT from "../../assets/collaborators/jsonwebtoken.png";
import TalemyLight from "../../assets/collaborators/talemy-light.png";
import TalemyDark from "../../assets/collaborators/talemy-dark.png";
import EduMallLight from "../../assets/collaborators/edumall-light.png";
import EduMallDark from "../../assets/collaborators/edumall-dark.png";
import AllStudy from "../../assets/collaborators/all-study.png";
import { motion } from "motion/react";

const Collaborators = () => {
	const logos = [
		{
			light: EdemyLight,
			dark: EdemyDark,
			alt: "Edemy",
		},
		{
			light: UILight,
			dark: UIDark,
			alt: "UI",
		},
		{
			light: JWT,
			dark: JWT,
			alt: "JSONWebToken",
		},
		{
			light: TalemyLight,
			dark: TalemyDark,
			alt: "Talemy",
		},
		{
			light: EduMallLight,
			dark: EduMallDark,
			alt: "EduMall",
		},
		{
			light: AllStudy,
			dark: AllStudy,
			alt: "All Study",
		},
	];
	const currentTheme = localStorage.getItem("theme");
	return (
		<motion.section
			id="collaborators"
			className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 place-items-center gap-x-8 gap-y-10"
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
			{/* Section Heading */}
			<h3 className="text-3xl font-bold text-center lg:text-start text-balance">
				We{" "}
				<span className="text-primary-dark dark:text-primary-light">Collaborate</span>{" "}
				with <span className="text-primary-dark dark:text-primary-light">10+</span>{" "}
				Leading Institutions and Companies
			</h3>
			<div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-x-4 gap-y-6 md:gap-y-8">
				{logos.map((logo) => (
					<a
						key={logo.alt}
						href={currentTheme === "light" ? logo.light : logo.dark}
						target="_blank"
					>
						<img
							src={currentTheme === "light" ? logo.light : logo.dark}
							alt={logo.alt}
							className="h-6 cursor-pointer hover:scale-110 duration-200"
						/>
					</a>
				))}
			</div>
		</motion.section>
	);
};

export default Collaborators;
