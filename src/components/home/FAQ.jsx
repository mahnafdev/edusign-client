import Accordion from "../shared/Accordion";

const FAQ = () => {
	return (
		<section
			id="faq"
			className="max-w-8xl mx-auto mt-20 space-y-12"
		>
			<h2 className="text-4xl font-bold text-center">
				Frequently Asked{" "}
				<span className="text-primary-dark dark:text-primary-light">Questions</span>
			</h2>
			<div
				id="faq-accordions"
				className="space-y-4"
			>
				<Accordion />
			</div>
		</section>
	);
};

export default FAQ;
