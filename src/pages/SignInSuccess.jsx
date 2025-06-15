import Lottie from "lottie-react";
import SuccessLottie from "../assets/lotties/authenticateSuccess.json";

const SignInSuccess = () => {
	return (
		<main className="pt-40 pb-20">
			<Lottie
				animationData={SuccessLottie}
				className="mx-auto w-sm"
			/>
		</main>
	);
};

export default SignInSuccess;
