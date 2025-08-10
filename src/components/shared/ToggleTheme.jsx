import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

const ToggleTheme = ({ buttonClasses = "" }) => {
	const [theme, setTheme] = useState("light");
	const handleToggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
	};
	useEffect(() => {
		const doesPreferDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
		if (doesPreferDarkTheme.matches) {
			setTheme("dark");
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			setTheme("light");
			document.documentElement.setAttribute("data-theme", "light");
		}
	}, []);
	const ThemeIcon = theme === "light" ? FaMoon : FaSun;
	return (
		<button
			onClick={handleToggle}
			className={`cursor-pointer ${buttonClasses}`}
		>
			<ThemeIcon
				size={26}
				className="fill-dark dark:fill-light"
			/>
		</button>
	);
};

export default ToggleTheme;
