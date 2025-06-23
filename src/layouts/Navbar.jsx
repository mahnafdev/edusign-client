import { NavLink, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import ToggleTheme from "../components/shared/ToggleTheme";
import Button from "../components/shared/Button";
import useAuthContext from "../hooks/useAuthContext";
import DefaultUserPhoto from "../assets/default-user-photo.png";
import { FaLayerGroup } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
	const { user, loading, signOutUser } = useAuthContext();
	const [showMenu, setShowMenu] = useState(false);
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);
	const navigate = useNavigate();
	const handleLogout = () => {
		signOutUser()
			.then((userCredentials) => {
				toast.success("Logged out successfully!");
				navigate("/signin");
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<nav
			id="navbar"
			className="z-50 fixed top-0 left-0 right-0 py-2 bg-gradient-to-r from-light/70 to-light/70 dark:from-dark/80 dark:to-dark/80 backdrop-blur-md"
		>
			{/* All Navbar content */}
			<div
				id="nav-content"
				className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-8xl mx-auto flex items-center justify-between"
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
				{/* Dropdown Menu */}
				<div
					id="mobile-menu"
					className="relative lg:hidden"
				>
					<h5
						className="text-xl font-medium flex items-center gap-x-2 px-3 py-1 rounded-full hover:bg-primary hover:text-light transition-colors duration-100 cursor-pointer"
						onClick={() => setShowMenu(!showMenu)}
					>
						<FaLayerGroup size={20} />
						Menu
					</h5>
					<div
						className={`w-max bg-primary-background-light/95 border border-blue-300 dark:bg-[#20202a] dark:border-blue-700 absolute top-10 -left-8 ${
							showMenu ? "flex flex-col" : "hidden"
						} font-medium rounded-2xl py-2`}
					>
						<NavLink
							to="/"
							className="px-4 py-1 rounded-md hover:bg-primary/90 hover:text-light transition-colors duration-100"
						>
							Home
						</NavLink>
						<NavLink
							to="/assignments"
							className="px-4 py-1 rounded-md hover:bg-primary/90 hover:text-light transition-colors duration-100"
						>
							Assignments
						</NavLink>
						{user ? (
							<NavLink
								to="/submissions/pending"
								className="px-4 py-1 rounded-md hover:bg-primary/90 hover:text-light transition-colors duration-100"
							>
								Pending Submissions
							</NavLink>
						) : null}
						<NavLink
							to="/blogs"
							className="px-4 py-1 rounded-md hover:bg-primary/90 hover:text-light transition-colors duration-100"
						>
							Blogs
						</NavLink>
						{user ? (
							<Button
								customClasses="w-fit mt-4 ml-4 !py-1"
								onClick={handleLogout}
							>
								Logout
							</Button>
						) : (
							<NavLink to="/signin">
								<Button customClasses="w-fit mt-4 ml-4 !py-1">Sign In</Button>
							</NavLink>
						)}
					</div>
				</div>
				{/* Links */}
				<div
					id="nav-links"
					className="hidden lg:flex items-center gap-x-2 rounded-full p-2 font-medium bg-primary-background-light dark:bg-primary-background-dark"
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
						Assignments
					</NavLink>
					{user ? (
						<NavLink
							to="/submissions/pending"
							className="px-4 py-2 rounded-full hover:bg-primary hover:text-light transition-colors duration-100"
						>
							Pending Submissions
						</NavLink>
					) : null}
					<NavLink
						to="/blogs"
						className="px-4 py-2 rounded-full hover:bg-primary hover:text-light transition-colors duration-100"
					>
						Blogs
					</NavLink>
				</div>
				{/* Buttons */}
				<div
					id="nav-buttons"
					className="flex items-center gap-x-2 text-lg font-semibold relative"
				>
					{loading || user ? (
						<>
							<div className="group">
								<img
									src={loading ? DefaultUserPhoto : user.photoURL}
									alt="User Photo"
									className="size-12 object-cover object-center border-2 border-primary rounded-full cursor-pointer"
									onClick={() => setShowProfileDropdown(!showProfileDropdown)}
								/>
								<span className="bg-blue-700/20 px-2 py-1 border border-blue-700/60 text-[1rem] font-medium rounded-md absolute top-14 -left-5 hidden opacity-0 group-hover:inline-block group-hover:opacity-100">
									{user?.fullName}
								</span>
								<div
									className={`w-max bg-primary-background-light/95 border border-blue-300 dark:bg-[#20202a] dark:border-blue-700 absolute top-14 -left-4 ${
										showProfileDropdown ? "flex flex-col" : "hidden"
									} font-medium rounded-2xl py-2`}
								>
									<NavLink
										to="/assignments/create"
										className="px-4 py-1 rounded-md hover:bg-primary/90 hover:text-light transition-colors duration-100"
									>
										Create Assignment
									</NavLink>
									<NavLink
										to="/submissions/mine"
										className="px-4 py-1 rounded-md hover:bg-primary/90 hover:text-light transition-colors duration-100"
									>
										My Submissions
									</NavLink>
								</div>
							</div>
							<Button
								customClasses="max-lg:hidden"
								onClick={handleLogout}
							>
								Logout
							</Button>
						</>
					) : (
						<NavLink
							to="/signin"
							className="max-lg:hidden"
						>
							<Button>Sign In</Button>
						</NavLink>
					)}
					<ToggleTheme buttonClasses="ml-2" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
