import { FaGoogle } from "react-icons/fa6";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";

const GoogleSignIn = () => {
	const { signInUserWithGoogle } = useAuthContext();
	const handleSignIn = () => {
		signInUserWithGoogle()
			.then((userCredentials) => {
				toast.success("Successfully logged in to your account with Google!");
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<button
			type="button"
			className="w-3/4 mx-auto py-2 text-lg font-medium flex items-center justify-center gap-x-3 border border-[#bbbbbb] dark:border-neutral-600 rounded-full bg-primary-background-light dark:bg-[#19191f] hover:border-[#cccccc] dark:hover:border-neutral-700 hover:bg-primary/10 cursor-pointer"
			onClick={handleSignIn}
		>
			<FaGoogle
				size={20}
				className="fill-primary"
			/>
			Sign In with Google
		</button>
	);
};

export default GoogleSignIn;
