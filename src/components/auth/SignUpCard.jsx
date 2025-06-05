import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";

const SignUpCard = () => {
	const { signUpUser } = useAuthContext();
	// Handle SignUp operation
	const handleSignUp = (event) => {
		// Prevent website from reloading
		event.preventDefault();
		// Get submitted data
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Sign up the user
		signUpUser(data.email, data.password)
			// Upon success
			.then((userCredentials) => {
				toast.success("Created your account successfully!", {
					position: "top-left",
					duration: 2500,
				});
			})
			// Upon error
			.catch((error) => {
				toast.error(`${error.message}`, {
					position: "top-left",
					duration: 2500,
				});
			});
	};
	return (
		<div className="max-w-xl mx-auto p-8 bg-primary-background-light dark:bg-[#20202a] rounded-4xl shadow-lg shadow-dark/10 hover:shadow-dark/15 transition-shadow duration-100">
			{/* Heading */}
			<h2 className="text-4xl font-bold text-center text-primary dark:text-primary-light mb-8">
				Sign Up
			</h2>
			{/* Form */}
			<form
				className="max-w-5/6 mx-auto space-y-2"
				onSubmit={handleSignUp}
			>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">First Name</span>
					<input
						type="text"
						name="firstName"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="Steve"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Last Name</span>
					<input
						type="text"
						name="lastName"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="Potter"
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Email</span>
					<input
						type="email"
						name="email"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="steve.potter@example.com"
						required
					/>
				</label>
				<label className="flex flex-col gap-y-1 text-lg">
					<span className="font-medium">Password</span>
					<input
						type="password"
						name="password"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="********"
						required
					/>
				</label>
				<div className="text-center mt-6">
					<button
						type="submit"
						className="w-full py-3 text-xl text-light font-medium bg-primary hover:bg-primary-dark rounded-xl cursor-pointer"
					>
						Sign Up
					</button>
				</div>
			</form>
			<p className="font-medium text-center mt-6">
				Already a student here?{" "}
				<Link
					to="/signin"
					className="text-primary font-semibold hover:underline hover:underline-offset-2"
				>
					Sign In
				</Link>
				.
			</p>
		</div>
	);
};

export default SignUpCard;
