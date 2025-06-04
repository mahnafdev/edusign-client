import { FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-primary-background-light dark:bg-primary-background-dark"
		>
			{/* Footer Content */}
			<div
				id="footer-content"
				className="max-w-8xl mx-auto py-24 flex justify-between"
			>
				{/* Logo and Slogan */}
				<div className="space-y-4">
					<div
						id="nav-logo"
						className="flex items-center gap-x-3 cursor-default"
					>
						<img
							src={Logo}
							alt="Logo"
							className="w-9"
						/>
						<h4 className="text-2xl font-bold">EduSign</h4>
					</div>
					<p className="font-medium">The Smarter Way to Solve and Learn Together</p>
				</div>
				{/* Contact Info */}
				<div className="space-y-2">
					<h5 className="text-lg font-semibold text-primary-background-dark dark:text-primary-background-light">
						Contact
					</h5>
					<ul className="space-y-1">
						<li className="flex items-center gap-x-2">
							<FaLocationDot />
							Horogram Bazar, Rajshahi, Rajshahi 6201
						</li>
						<li className="flex items-center gap-x-2">
							<FaMessage />
							promahnaf@gmail.com
						</li>
						<li className="flex items-center gap-x-2">
							<FaPhone />
							880-1710-243940
						</li>
					</ul>
				</div>
				{/* Legal */}
				<div className="space-y-2">
					<h5 className="pl-2 text-lg font-semibold text-primary-background-dark dark:text-primary-background-light">
						Legal
					</h5>
					<ul className="space-y-1">
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<Link
								to="/legal/terms-conditions"
								target="_blank"
							>
								Terms & Conditions
							</Link>
						</li>
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<Link
								to="/legal/privacy"
								target="_blank"
							>
								Privacy Policy
							</Link>
						</li>
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<Link
								to="/legal/cookie"
								target="_blank"
							>
								Cookie Policy
							</Link>
						</li>
					</ul>
				</div>
				{/* Resources */}
				<div className="space-y-2">
					<h5 className="pl-2 text-lg font-semibold text-primary-background-dark dark:text-primary-background-light">
						Resources
					</h5>
					<ul className="space-y-1">
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<Link to="/assignments">Assignments</Link>
						</li>
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<Link
								to="/how-to"
								target="_blank"
							>
								Usage Guide
							</Link>
						</li>
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<a
								href="https://github.com/sponsors/ninjaquasar"
								target="_blank"
							>
								Become a Collaborator
							</a>
						</li>
						<li className="pl-2 border-l-2 border-l-transparent hover:border-l-primary">
							<Link
								to="/blogs"
								target="_blank"
							>
								Blogs
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* Copyright text */}
			<div className="py-2 text-lg text-center font-medium bg-primary-light text-light dark:bg-primary-dark">
				<p>&copy; EduSign - 2025</p>
			</div>
		</footer>
	);
};

export default Footer;
