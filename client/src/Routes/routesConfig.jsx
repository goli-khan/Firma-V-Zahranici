import Login from "../Pages/Login.jsx";
import OnBoarding from "../Pages/OnBoarding.jsx";
import Country from "../Pages/Country.jsx";
import Poland from "../Pages/Poland.jsx";
import Usa from "../Pages/Usa.jsx";
import Other from "../Pages/Other.jsx";
import NewCompany from "../Pages/NewCompany.jsx";

const routes = [
	{
		path: "/",
		element: <OnBoarding />,
		isPrivate: true,
	},
	{
		path: "/country",
		element: <Country />,
		isPrivate: false,
	},
	{
		path: "/usa",
		element: <Usa />,
		isPrivate: false,
	},
	{
		path: "/new-company",
		element: <NewCompany />,
		isPrivate: false,
	},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{},
	{
		path: "/poland",
		element: <Poland />,
		isPrivate: false,
	},
	{
		path: "/poland",
		element: <Poland />,
		isPrivate: false,
	},
	{
		path: "/other",
		element: <Other />,
		isPrivate: false,
	},
	{
		path: "/login",
		element: <Login />,
		isPrivate: false,
	},
];

export default routes;
