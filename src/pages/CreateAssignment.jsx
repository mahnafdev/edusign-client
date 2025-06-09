import CreateAssignmentForm from "../components/assignments/CreateAssignmentForm";

const CreateAssignment = () => {
	return (
		<main className="py-28">
			<section className="max-w-7xl mx-auto flex items-center justify-between">
				{/* Form */}
				<CreateAssignmentForm />
				{/* Image */}
				<img
					src="https://i.ibb.co/KjtR9Bcm/create-assignment.png"
					alt="Create Assignment Image"
					className="w-xl aspect-[7/6]"
				/>
			</section>
		</main>
	);
};

export default CreateAssignment;
