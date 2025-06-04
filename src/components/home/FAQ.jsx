import Accordion from "../shared/Accordion";

const FAQ = () => {
	const faqs = [
		{
			title: "What makes EduSign different from regular group study platforms?",
			description:
				"EduSign provides smart assignment-based study system that's used to collaborate smartly. You study in focused groups, gain collaborative solutions, track learning, and learn together.",
		},
		{
			title: "Can teachers/mentors use EduSign too?",
			description:
				"Absolutely. Teachers/Mentors can publish new assignments, track student's progress, review submissions without any effort.",
		},
		{
			title: "Is there any deadline for assignments?",
			description:
				"Yes, mentors set deadlines for assignments. And also can extend or reduce deadline. Students get appreciated on finishing assignments within the deadline.",
		},
		{
			title: "How does the signature or tracking part work?",
			description:
				"EduSign provides a smart tracking system that instantly tracks who published or updated an assignment, and who submitted which assignment and when.",
		},
	];
	return (
		<section
			id="faq"
			className="max-w-8xl mx-auto mt-20 space-y-10"
		>
			{/* Section Heading */}
			<h2 className="text-4xl font-bold text-center">
				Frequently Asked{" "}
				<span className="text-primary-dark dark:text-primary-light">Questions</span>
			</h2>
			{/* FAQs List */}
			<div
				id="faq-accordions"
				className="space-y-4"
			>
				{faqs.map((faq) => (
					<Accordion
						key={faq.title}
						title={faq.title}
						description={faq.description}
					/>
				))}
			</div>
		</section>
	);
};

export default FAQ;
