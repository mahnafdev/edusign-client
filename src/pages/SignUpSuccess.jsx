import Lottie from "lottie-react";
import SuccessLottie from "../assets/lotties/accountCreateSuccess.json";

const SignUpSuccess = () => {
	return (
		<main className="pt-40 pb-20">
			<Lottie
				animationData={SuccessLottie}
				className="mx-auto w-sm"
			/>
		</main>
	);
};

export default SignUpSuccess;
