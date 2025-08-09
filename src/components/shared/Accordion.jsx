import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Accordion = ({
	title = "Lorem ipsum dolor sit amet?",
	description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="bg-primary-background-light dark:bg-primary-background-dark px-8 py-6 rounded-xl space-y-6">
			{/* Title and Icon */}
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h4 className="text-2xl font-semibold">{title}</h4>
				<FaPlus
					size={20}
					className={`fill-primary dark:fill-primary-light ${
						isOpen ? "rotate-135" : "rotate-0"
					} transition-transform duration-300`}
				/>
			</div>
			{/* Description */}
			{isOpen ? <p className="text-lg max-w-15/16">{description}</p> : null}
		</div>
	);
};

export default Accordion;
