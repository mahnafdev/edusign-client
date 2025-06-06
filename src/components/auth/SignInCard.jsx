import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import GoogleSignIn from "./GoogleSignIn";

const SignInCard = () => {
	const { signInUser } = useAuthContext();
	// Handle SignIn operation
	const handleSignIn = (event) => {
		// Prevent website from reloading
		event.preventDefault();
		// Get submitted data
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Sign in the user
		signInUser(data.email, data.password)
			// Upon success
			.then((userCredentials) => {
				toast.success("Logged in to your account successfully!");
			})
			// Upon error
			.catch((error) => {
				toast.error(`${error.message}`);
			});
	};
	return (
		<div className="max-w-xl mx-auto p-8 bg-primary-background-light dark:bg-[#20202a] rounded-4xl shadow-lg shadow-dark/10 hover:shadow-dark/15 transition-shadow duration-100">
			{/* Heading */}
			<h2 className="text-4xl font-bold text-center text-primary dark:text-primary-light mb-8">
				Sign In
			</h2>
			{/* Form */}
			<form
				className="max-w-5/6 mx-auto space-y-2"
				onSubmit={handleSignIn}
			>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Email</span>
					<input
						type="email"
						name="email"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="steve.potter@example.com"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Password</span>
					<input
						type="password"
						name="password"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="********"
					/>
				</label>
				<div className="text-center mt-6">
					<button
						type="submit"
						className="w-full py-2 text-xl text-light font-medium bg-primary hover:bg-primary-dark rounded-xl cursor-pointer"
					>
						Sign In
					</button>
				</div>
			</form>
			<div className="relative my-8 max-w-5/6 mx-auto">
				<div className="border border-[#c4c4c4] dark:border-neutral-600 border-dashed" />
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 font-medium px-2 bg-primary-background-light dark:bg-[#20202a] text-neutral-500">
					OR
				</span>
			</div>
			<GoogleSignIn />
			<p className="font-medium text-center mt-6">
				New student here?{" "}
				<Link
					to="/signup"
					className="text-primary font-semibold hover:underline hover:underline-offset-2"
				>
					Sign Up
				</Link>
				.
			</p>
		</div>
	);
};

export default SignInCard;
