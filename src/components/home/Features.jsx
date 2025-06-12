import {
	FaChartColumn,
	FaFileCircleCheck,
	FaFileCirclePlus,
	FaFolderOpen,
	FaPenToSquare,
	FaPeopleGroup,
	FaTrashCan,
	FaUpload,
} from "react-icons/fa6";
import FeatureCard from "../shared/FeatureCard";

const Features = () => {
	const features = [
		{
			Icon: FaFileCirclePlus,
			title: "Create Assignments Easily",
			description:
				"Publish assignments quickly using a simple and friendly creation form.",
		},
		{
			Icon: FaFolderOpen,
			title: "Browse & Filter Assignments",
			description:
				"View all active assignments with instructions, dates, and other details.",
		},
		{
			Icon: FaPenToSquare,
			title: "Update Your Assignments",
			description:
				"Update any published assignment to match updated requirements easily.",
		},
		{
			Icon: FaTrashCan,
			title: "Delete with Confidence",
			description:
				"Remove outdated or incorrect assignments with confirmation safety checks.",
		},
		{
			Icon: FaUpload,
			title: "Submit Your Solution",
			description: "Submit answers and connect them to their respective assignments.",
		},
		{
			Icon: FaChartColumn,
			title: "Track Pending Assignments",
			description: "Stay ahead by tracking which assignments are still pending or due.",
		},
		{
			Icon: FaPeopleGroup,
			title: "Collaborate in Study Groups",
			description:
				"Solve together, share ideas, and submit group-based assignments smoothly.",
		},
		{
			Icon: FaFileCircleCheck,
			title: "Mark as Completed",
			description:
				"Mark assignments as done to manage progress and reduce dashboard clutter.",
		},
	];
	return (
		<section className="max-w-8xl mx-auto mt-24 space-y-10">
			{/* Section Heading */}
			<h2 className="text-4xl font-bold text-center">
				Smart{" "}
				<span className="text-primary-dark dark:text-primary-light">Features</span>
			</h2>
			{/* Features Grid */}
			<div
				role="grid"
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
			>
				{features.map((feature) => (
					<FeatureCard key={feature.title}>{feature}</FeatureCard>
				))}
			</div>
		</section>
	);
};

export default Features;
