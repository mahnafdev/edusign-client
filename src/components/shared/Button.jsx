const Button = ({
	children: content = "Button",
	buttonType = "button",
	fullWidth = false,
	fullRounded = false,
	customClasses = "",
	onClick,
}) => {
	return (
		<button
			type={buttonType}
			className={`${fullWidth ? "w-full" : "px-4"} ${
				fullRounded ? "rounded-full" : "rounded-lg"
			} relative py-2 bg-primary text-light text-lg font-medium border border-b-4 border-blue-700 overflow-hidden hover:border-t-4 hover:border-b active:brightness-115 duration-250 cursor-pointer group ${customClasses}`}
			onClick={onClick}
		>
			<span className="bg-blue-300 shadow-blue-300 absolute -top-[35%] left-0 inline-flex w-full h-1 rounded-md opacity-50 group-hover:top-[110%] duration-400 shadow-[0_0_0.5rem_0.5rem_rgba(0,0,0,0.3)]"></span>
			{content}
		</button>
	);
};

export default Button;
