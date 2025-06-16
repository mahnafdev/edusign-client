import StatCard from "../shared/StatCard";
import { motion } from "motion/react";

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
		<motion.section
			id="stats"
			className="mt-40 py-20 lg:py-28 bg-[url(https://i.ibb.co/sJF64JXP/stats-bg.jpg)] bg-cover bg-center text-light"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 0.75,
			}}
		>
			<div
				id="stats-content"
				className="md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 place-items-center gap-y-12"
			>
				{stats.map((stat) => (
					<StatCard
						key={stat.title}
						count={stat.count}
						title={stat.title}
					/>
				))}
			</div>
		</motion.section>
	);
};

export default Stats;
