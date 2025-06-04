import { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Root = () => {
	return (
		<Fragment>
			<Navbar />
			<Outlet />
		</Fragment>
	);
};

export default Root;
