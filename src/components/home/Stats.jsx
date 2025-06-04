import StatCard from "../shared/StatCard";

const Stats = () => {
	const stats = [
		{
			number: 105,
			title: "Active Studying Groups",
		},
		{
			number: 340,
			title: "Experienced Mentors",
		},
		{
			number: 455,
			title: "Graduated Students",
		},
		{
			number: 180,
			title: "Published Assignments",
		},
	];
	return (
		<section
			id="stats"
			className="mt-24 py-24 bg-[url(https://i.ibb.co/sJF64JXP/stats-bg.jpg)] bg-cover bg-center text-light"
		>
			<div
				id="stats-content"
				className="max-w-7xl mx-auto flex justify-between"
			>
				{stats.map((stat) => (
					<StatCard
						key={stat.title}
						number={stat.number}
						title={stat.title}
					/>
				))}
			</div>
		</section>
	);
};

export default Stats;
