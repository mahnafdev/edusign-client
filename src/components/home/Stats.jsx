import StatCard from "../shared/StatCard";

const Stats = () => {
	const stats = [
		{
			count: 105,
			title: "Active Studying Groups",
		},
		{
			count: 340,
			title: "Experienced Mentors",
		},
		{
			count: 455,
			title: "Graduated Students",
		},
		{
			count: 180,
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
						count={stat.count}
						title={stat.title}
					/>
				))}
			</div>
		</section>
	);
};

export default Stats;
