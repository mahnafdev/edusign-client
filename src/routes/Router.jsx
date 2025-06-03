import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";

const Router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
	},
]);

export default Router;
