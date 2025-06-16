import ContentLoader from "react-content-loader";

const Loader = ({ count = 1 }) => {
	return (
		<div className="space-y-12">
			{Array.from({ length: count }).map((value, index) => (
				<ContentLoader
					key={index}
					speed={1.25}
					width={700}
					height={150}
					backgroundColor="#f1f1f1"
					foregroundColor="#ececec"
				>
					<rect
						x="0"
						y="0"
						rx="16"
						ry="16"
						width="200"
						height="150"
					/>
					<rect
						x="220"
						y="10"
						rx="4"
						ry="4"
						width="350"
						height="20"
					/>
					<rect
						x="220"
						y="45"
						rx="4"
						ry="4"
						width="150"
						height="24"
					/>
					<rect
						x="220"
						y="80"
						rx="4"
						ry="4"
						width="450"
						height="12"
					/>
					<rect
						x="380"
						y="110"
						rx="6"
						ry="6"
						width="100"
						height="24"
					/>
				</ContentLoader>
			))}
		</div>
	);
};

export default Loader;
