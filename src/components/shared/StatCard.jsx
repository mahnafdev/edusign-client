import CountUp from "react-countup";

const StatCard = ({ count = 0, title = "" }) => {
	return (
		<div className="space-y-4">
			<h2 className="text-5xl font-bold text-center">
				<CountUp
					start={0}
					end={count}
					delay={0.5}
					duration={5}
					enableScrollSpy
					scrollSpyOnce
					suffix="+"
				/>
			</h2>
			<p className="text-lg text-neutral-200 font-medium">{title}</p>
		</div>
	);
};

export default StatCard;
