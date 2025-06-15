import Lottie from "lottie-react";
import SuccessLottie from "../assets/lotties/accountCreateSuccess.json";

const SignUpSuccess = () => {
	return (
		<main className="pt-28 pb-12">
			<Lottie
				animationData={SuccessLottie}
				className="mx-auto w-sm aspect-square"
			/>
		</main>
	);
};

export default SignUpSuccess;
