import { Link, useNavigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import GoogleSignIn from "./GoogleSignIn";
import Button from "../shared/Button";
import api from "../../services/apiClient";

const SignUpCard = () => {
	const { signUpUser, updateUserProfile } = useAuthContext();
	const navigate = useNavigate();
	// Handle SignUp operation
	const handleSignUp = (event) => {
		// Prevent website from reloading
		event.preventDefault();
		// Get submitted data
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		// Verify password
		const checkLength = /^.{6,}$/;
		const checkUppercase = /(?=.*[A-Z])/;
		const checkLowercase = /(?=.*[a-z])/;
		if (!checkLength.test(data.password))
			toast.error("Password must be atleast 6 characters long");
		else if (!checkUppercase.test(data.password))
			toast.error("Password must include an uppercase letter");
		else if (!checkLowercase.test(data.password))
			toast.error("Password must include a lowercase letter");
		else {
			// Sign up the user
			signUpUser(data.email, data.password)
				// Upon success
				.then((userCredentials) => {
					// Update user profile
					updateUserProfile(data.firstName + data.lastName, data.photoURL)
						// Upon success
						.then(() => {
							// Save user to database
							const formattedData = {
								first_name: data.firstName,
								last_name: data.lastName,
								photo_url: data.photoURL,
								email: data.email,
								password: data.password,
							};
							api.post("/users", formattedData)
								// Upon success
								.then((res) => {
									toast.success("Created your account successfully!");
									navigate("/success/account-create");
								})
								// Upon error
								.catch((error) => toast.error(error.message));
						})
						// Upon error
						.catch((error) => toast.error(error.message));
				})
				// Upon error
				.catch((error) => toast.error(error.message));
		}
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
					<span className="font-medium">Profile Photo (URL)</span>
					<input
						type="url"
						name="photoURL"
						className="bg-blue-50 dark:bg-[#19191f] p-2 border border-blue-300 dark:border-blue-800 focus:outline-none focus:border-primary-light dark:focus:border-primary-dark rounded-lg placeholder:text-neutral-400"
						placeholder="https://imgur.com/gallery/user_photo"
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
					<Button
						buttonType="submit"
						customClasses="w-full text-xl"
					>
						Sign Up
					</Button>
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
