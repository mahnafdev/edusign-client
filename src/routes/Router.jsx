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
import CreateAssignmentSuccess from "../pages/CreateAssignmentSuccess";
import UpdateAssignment from "../pages/UpdateAssignment";
import TakeAssignment from "../pages/TakeAssignment";
import MySubmissions from "../pages/MySubmissions";

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
			{
				path: "/assignments/update/:id",
				Component: UpdateAssignment,
			},
			{
				path: "/assignments/submit/:id",
				Component: TakeAssignment,
			},
			// Submission routes
			{
				path: "/submissions/mine",
				Component: MySubmissions,
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
			{
				path: "/success/assignment-create",
				Component: CreateAssignmentSuccess,
			},
		],
	},
]);

export default Router;
