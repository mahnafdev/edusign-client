import { FaCalendarDay, FaCalendarPlus, FaSignal, FaStar, FaTrophy } from "react-icons/fa6";

const AssignmentDetailsInfo = ({ assignment }) => {
	const {
		thumbnail,
		title,
		subject,
		total_marks,
		difficulty,
		posted_date,
		due_date,
		description,
	} = assignment;
	const passing_marks = (total_marks / 10) * 8;
	return (
		<section className="max-w-8xl mx-auto space-y-12">
			{/* Basic Info */}
			<div className="grid grid-cols-8 gap-6 items-center">
				{/* Thumbnail Image */}
				<div className="col-span-3 rounded-l-3xl rounded-r-lg aspect-[2/1] overflow-hidden">
					<img
						src={thumbnail}
						alt="Thumbnail Image"
						className="object-cover object-center rounded-l-3xl rounded-r-lg w-full h-full hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<div className="col-span-5 space-y-6">
					{/* Title */}
					<h2 className="text-4xl font-semibold">{title}</h2>
					{/* Subject */}
					<p
						title="Subject"
						className="px-3 py-1 bg-neutral-200/60 w-fit rounded-md font-medium text-lg text-neutral-800"
					>
						{subject}
					</p>
				</div>
			</div>
			{/* Key Info */}
			<div className="max-w-4xl mx-auto p-8 flex flex-col items-center bg-neutral-100 border border-neutral-200 rounded-2xl text-xl">
				<div className="grid grid-cols-2 gap-x-20 gap-y-4">
					<p
						className="flex items-center gap-x-2"
						title="Maximum obtainable Marks of the Assignment"
					>
						<FaStar
							size={20}
							className="fill-blue-900"
						/>
						<span className="font-medium">Total Marks:</span>
						{total_marks}
					</p>
					<p
						className="flex items-center gap-x-2"
						title="Marks to get for Passing the Assignment"
					>
						<FaTrophy
							size={20}
							className="fill-blue-900"
						/>
						<span className="font-medium">
							Passing Marks <span className="text-lg">(80%)</span>:
						</span>
						{passing_marks}
					</p>
					<p
						className="flex items-center gap-x-2"
						title="How difficult the Assignment is, accordion to the instructor"
					>
						<FaSignal
							size={20}
							className="fill-blue-900"
						/>
						<span className="font-medium">Difficulty:</span>
						{difficulty}
					</p>
					<p
						className="flex items-center gap-x-2"
						title="The date when the Assignment is posted"
					>
						<FaCalendarPlus
							size={20}
							className="fill-blue-900"
						/>
						<span className="font-medium">Posted Date:</span>
						{posted_date}
					</p>
					<p
						className="flex items-center gap-x-2"
						title="The date when the Assignment will be taken"
					>
						<FaCalendarDay
							size={20}
							className="fill-blue-900"
						/>
						<span className="font-medium">Due Date:</span>
						{due_date}
					</p>
				</div>
			</div>
			{/* Description */}
			<div className="max-w-7xl mx-auto p-8 bg-neutral-100 border border-neutral-200 rounded-2xl text-lg">
				<p className="font-semibold text-xl mb-1">Instructions:</p>
				<p>{description}</p>
			</div>
		</section>
	);
};

export default AssignmentDetailsInfo;
