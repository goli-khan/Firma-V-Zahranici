import Home from "../Components/Home";
import Login from "../Pages/Login.jsx";
import InitalForm from "../Pages/InitialForm.jsx";
const routes = [
	{
		path: "/",
		element: <InitalForm />,
		isPrivate: true,
	},
	{
		path: "/",
		element: <Home />,
		isPrivate: false,
	},
	{
		path: "/login",
		element: <Login />,
		isPrivate: false,
	},
];

export default routes;
