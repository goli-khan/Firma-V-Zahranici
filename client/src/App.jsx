import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PrivateRoutes from "./Utils/PrivateRoutes";
import routes from "./Routes/routesConfig.jsx";
import ProtectedRoutes from "./Utils/ProtectedRoutes.jsx";

const App = () => {
	console.log(routes);
	return (
		<>
			<Header />
			<main>
				<Routes>
					{routes.map(({ path, element, isPrivate }, index) =>
						isPrivate ? (
							<Route
								path={path}
								key={index}
								element={<PrivateRoutes>{element}</PrivateRoutes>}
							/>
						) : (
							<Route path={path} key={index} element={element} />
						),
					)}
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;
