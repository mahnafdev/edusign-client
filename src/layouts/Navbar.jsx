import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import ToggleTheme from "../components/shared/ToggleTheme";

const Navbar = () => {
	return (
		<nav
			id="navbar"
			className="fixed top-0 left-0 right-0 py-2 bg-gradient-to-r from-light/60 to-light/60 dark:from-dark/60 dark:to-dark/60 backdrop-blur-md"
		>
			{/* All Navbar content */}
			<div
				id="nav-content"
				className="max-w-8xl mx-auto flex items-center justify-between"
			>
				{/* Logo and Title */}
				<NavLink to="/">
					<div
						id="nav-logo"
						className="flex items-center gap-x-3"
					>
						<img
							src={Logo}
							alt="Logo"
							className="w-9"
						/>
						<h4 className="text-2xl font-bold">EduSign</h4>
					</div>
				</NavLink>
				{/* Links */}
				<div
					id="nav-links"
					className="flex items-center gap-x-2 rounded-full p-2 font-medium bg-primary-background-light dark:bg-primary-background-dark"
				>
					<NavLink
						to="/"
						className="px-4 py-2 rounded-full hover:bg-primary hover:text-light transition-colors duration-100"
					>
						Home
					</NavLink>
					<NavLink
						to="/assignments"
						className="px-4 py-2 rounded-full hover:bg-primary hover:text-light transition-colors duration-100"
					>
						All Assignments
					</NavLink>
					<NavLink
						to="/assignments/pending"
						className="px-4 py-2 rounded-full hover:bg-primary hover:text-light transition-colors duration-100"
					>
						Pending Assignments
					</NavLink>
				</div>
				{/* Buttons */}
				<div
					id="nav-buttons"
					className="flex items-center gap-x-2 text-lg font-semibold"
				>
					<NavLink to="/login">
						<button
							type="button"
							className="px-4 py-2.5 bg-primary-light text-light rounded-lg hover:bg-primary cursor-pointer"
						>
							Login
						</button>
					</NavLink>
					<NavLink to="/support-contact">
						<button
							type="button"
							className="px-4 py-2.5 bg-primary-dark text-light rounded-lg hover:bg-primary cursor-pointer"
						>
							Support
						</button>
					</NavLink>
					<ToggleTheme buttonClasses="ml-4" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
