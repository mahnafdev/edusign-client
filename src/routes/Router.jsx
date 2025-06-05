import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";

const Router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
		],
	},
]);

export default Router;
