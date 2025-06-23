import { FaGoogle } from "react-icons/fa6";
import useAuthContext from "../../hooks/useAuthContext";
import toast from "react-hot-toast";
import Button from "../shared/Button";
import { useNavigate } from "react-router";

const GoogleSignIn = () => {
	const { signInUserWithGoogle } = useAuthContext();
	const navigate = useNavigate();
	const handleSignIn = () => {
		signInUserWithGoogle()
			.then((userCredentials) => {
				toast.success("Successfully logged in to your account with Google!");
				navigate("/success/authenticate");
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<Button
			onClick={handleSignIn}
			customClasses="w-3/4 mx-auto flex items-center justify-center gap-x-3"
		>
			<FaGoogle
				size={20}
				className="fill-light"
			/>
			Sign In with Google
		</Button>
	);
};

export default GoogleSignIn;
