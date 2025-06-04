const StatCard = ({ number = 0, title = "" }) => {
	return (
		<div className="space-y-4">
			<h2 className="text-5xl font-bold text-center">{number}+</h2>
			<p className="text-neutral-200 font-medium">{title}</p>
		</div>
	);
};

export default StatCard;
