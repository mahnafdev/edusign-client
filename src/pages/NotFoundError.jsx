import NotFoundLottie from "../assets/lotties/notFoundError.json";
import Lottie from "lottie-react";
import Button from "../components/shared/Button";
import { Link } from "react-router";

const NotFoundError = () => {
	return (
		<main className="h-screen flex flex-col justify-center items-center">
			<Lottie
				animationData={NotFoundLottie}
				className="mx-auto w-sm md:w-lg aspect-square"
			/>
			<h3 className="text-3xl font-bold text-center mb-8">
				Oops! Looks like you're distracted while studying.
			</h3>
			<Link
				to="/"
				className="text-center"
			>
				<Button>Go Back to Home</Button>
			</Link>
		</main>
	);
};

export default NotFoundError;
