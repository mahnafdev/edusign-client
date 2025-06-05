import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

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
			{
				path: "/signin",
				Component: SignInPage,
			},
		],
	},
]);

export default Router;
