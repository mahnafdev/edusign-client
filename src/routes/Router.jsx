import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import CreateAssignment from "../pages/CreateAssignment";
import ViewAssignments from "../pages/ViewAssignments";
import AssignmentDetails from "../pages/AssignmentDetails";
import SignUpSuccess from "../pages/SignUpSuccess";
import SignInSuccess from "../pages/SignInSuccess";

const Router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			// Auth routes
			{
				path: "/signup",
				Component: SignUpPage,
			},
			{
				path: "/signin",
				Component: SignInPage,
			},
			// Assignment routes
			{
				path: "/assignments",
				Component: ViewAssignments,
			},
			{
				path: "/assignments/create",
				Component: CreateAssignment,
			},
			{
				path: "/assignments/details/:id",
				Component: AssignmentDetails,
			},
			// Success routes
			{
				path: "/success/account-create",
				Component: SignUpSuccess,
			},
			{
				path: "/success/authenticate",
				Component: SignInSuccess,
			},
		],
	},
]);

export default Router;
