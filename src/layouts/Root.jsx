import { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Root = () => {
	return (
		<Fragment>
			<Navbar />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default Root;
