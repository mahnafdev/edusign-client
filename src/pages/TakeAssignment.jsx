import Lottie from "lottie-react";
import TakeAssignmentLottie from "../assets/lotties/takeAssignment.json";
import TakeAssignmentForm from "../components/assignments/TakeAssignmentForm";

const TakeAssignment = () => {
	return (
		<main className="py-24">
			<section className="lg:max-w-5xl 2xl:max-w-7xl mx-auto flex items-center justify-between">
				{/* Form */}
				<TakeAssignmentForm />
				{/* Image */}
				<Lottie
					animationData={TakeAssignmentLottie}
					className="w-md"
				/>
			</section>
		</main>
	);
};

export default TakeAssignment;
