import AssignmentCard from "../components/shared/AssignmentCard";

const ViewAssignments = () => {
	const assignments = [
		{
			id: 1,
			title: "Algebraic Expressions Simplification",
			subject: "Mathematics",
			description:
				"You are given a set of 10 algebraic problems involving brackets, powers, and variables. Your task is to simplify each expression step by step and show all your workings clearly. This will test your conceptual understanding and speed.",
			thumbnail:
				"https://cdn.slidesharecdn.com/ss_thumbnails/algebraicexpressionsppt-240311133021-8889d019-thumbnail.jpg",
			total_marks: 80,
			difficulty: "Medium",
			due_date: "2025-06-15",
			posted_date: "2025-06-10",
		},
		{
			id: 2,
			title: "Descriptive Essay: A Day Without Technology",
			subject: "Technology",
			description:
				"Imagine living a full day without any electronic devices or digital access. Describe how you would spend that day, the emotions you'd experience, and how your priorities might change. The essay should be between 350-500 words and written in first person.",
			thumbnail: "https://miro.medium.com/v2/1*eRtU9RoGo-_UZFfch_kzxQ.jpeg",
			total_marks: 80,
			difficulty: "Easy",
			due_date: "2025-06-13",
			posted_date: "2025-06-10",
		},
		{
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
		},
		{
			id: 4,
			title: "Reading Comprehension: The Value of Time",
			subject: "English",
			description:
				"Read the provided passage carefully and answer five detailed comprehension questions. Focus on main ideas, vocabulary in context, inference skills, and summary writing. Answers must be written in complete sentences and reflect understanding.",
			thumbnail:
				"https://www.kidpid.com/wp-content/uploads/2025/01/Paragraph-on-Value-of-Time.png",
			total_marks: 70,
			difficulty: "Easy",
			due_date: "2025-06-12",
			posted_date: "2025-06-10",
		},
	];
	return (
		<main className="py-24">
			<section className="max-w-8xl mx-auto space-y-10">
				{/* Heading Text */}
				<h2 className="text-4xl font-bold text-center text-primary">All Assignments</h2>
				{/* Assignments List */}
				<div className="flex flex-col gap-y-4">
					{assignments.map((assignment) => (
						<AssignmentCard key={assignment.id}>{assignment}</AssignmentCard>
					))}
				</div>
			</section>
		</main>
	);
};

export default ViewAssignments;
