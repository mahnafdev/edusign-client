import { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
	return (
		<Fragment>
			<Toaster
				toastOptions={{
					position: "top-left",
					duration: 2500,
				}}
			/>
			<Navbar />
			<Outlet />
			<Footer />
		</Fragment>
	);
};

export default Root;
