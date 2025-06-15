import Lottie from "lottie-react";
import SuccessLottie from "../assets/lotties/assignmentCreateSuccess.json";

const CreateAssignmentSuccess = () => {
	return (
		<main className="pt-28 pb-12">
			<Lottie
				animationData={SuccessLottie}
				className="mx-auto w-sm aspect-square"
			/>
		</main>
	);
};

export default CreateAssignmentSuccess;
