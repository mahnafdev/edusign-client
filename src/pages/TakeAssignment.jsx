import Lottie from "lottie-react";
import TakeAssignmentLottie from "../assets/lotties/takeAssignment.json";
import TakeAssignmentForm from "../components/assignments/TakeAssignmentForm";

const TakeAssignment = () => {
	return (
		<main className="py-24">
			<section className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-y-8">
				{/* Form */}
				<TakeAssignmentForm />
				{/* Image */}
				<Lottie
					animationData={TakeAssignmentLottie}
					className="w-sm lg:w-md"
				/>
			</section>
		</main>
	);
};

export default TakeAssignment;
