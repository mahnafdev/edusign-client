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
		<section
			id="collaborators"
			className="max-w-7xl mx-auto mt-8 grid grid-cols-2 place-items-center gap-x-8"
		>
			{/* Section Heading */}
			<h3 className="text-3xl font-bold">
				We{" "}
				<span className="text-primary-dark dark:text-primary-light">Collaborate</span>{" "}
				with <span className="text-primary-dark dark:text-primary-light">10+</span>{" "}
				Leading Institutions and Companies
			</h3>
			<div className="grid grid-cols-3 place-items-center gap-x-4 gap-y-8">
				{logos.map((logo) => (
					<a
						key={logo.alt}
						href={currentTheme === "light" ? logo.light : logo.dark}
						target="_blank"
					>
						<img
							src={currentTheme === "light" ? logo.light : logo.dark}
							alt={logo.alt}
							className="h-6 cursor-pointer"
						/>
					</a>
				))}
			</div>
		</section>
	);
};

export default Collaborators;
