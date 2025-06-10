import AssignmentDetailsInfo from "../components/assignments/AssignmentDetailsInfo";

const AssignmentDetails = () => {
	const assignmentData = {
		id: 3,
		title: "Biography of Prophet Muhammad (SAW)",
		subject: "Islamic",
		description:
			"Write a biographical overview of Prophet Muhammad (SAW)'s life including his early childhood, revelation, key struggles, and major achievements. Include at least 3 authentic references. Your write-up should be thoughtful.",
		thumbnail:
			"https://thesincereseeker.com/wp-content/uploads/2025/01/life-of-prophet-muhammad-seerah-05.png",
		total_marks: 90,
		difficulty: "Medium",
		due_date: "2025-06-18",
		posted_date: "2025-06-10",
	};
	return (
		<main className="py-28">
			<AssignmentDetailsInfo assignment={assignmentData} />
		</main>
	);
};

export default AssignmentDetails;
