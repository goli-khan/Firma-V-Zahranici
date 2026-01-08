import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
	const navigate = useNavigate();

	const toCountry = () => {
		navigate("/country");
	};
	return (
		<>
			<button onClick={toCountry}>press to go to country selection</button>
		</>
	);
};

export default OnBoarding;
