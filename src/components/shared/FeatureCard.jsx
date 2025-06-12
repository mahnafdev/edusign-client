const FeatureCard = ({ children: feature }) => {
	const { Icon, title, description } = feature;
	return (
		<div
			className="px-8 py-12 bg-gradient-to-br from-neutral-100 to-blue-100 border border-blue-300 rounded-2xl flex flex-col items-center gap-y-6"
			title={description}
		>
			<Icon
				size="48"
				className="fill-primary"
			/>
			<h5 className="text-xl font-semibold">{title}</h5>
		</div>
	);
};

export default FeatureCard;
