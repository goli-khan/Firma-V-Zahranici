import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
	const navigate = useNavigate();
	const data = { name: "goli Khan" };

	const toCountry = () => {
		navigate("/country", { state: data });
	};
	return (
		<>
			<button onClick={toCountry}>press to go to country selection</button>
		</>
	);
};

export default OnBoarding;
