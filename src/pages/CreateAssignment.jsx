import CreateAssignmentForm from "../components/assignments/CreateAssignmentForm";

const CreateAssignment = () => {
	return (
		<main className="py-20 lg:py-28">
			<section className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-y-8">
				{/* Form */}
				<CreateAssignmentForm />
				{/* Image */}
				<img
					src="https://i.ibb.co/KjtR9Bcm/create-assignment.png"
					alt="Create Assignment Image"
					className="w-sm lg:w-xl aspect-[7/6]"
				/>
			</section>
		</main>
	);
};

export default CreateAssignment;
