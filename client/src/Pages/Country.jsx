import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Country = () => {
	const navigate = useNavigate();
	const [Country, setCountry] = useState("Choose");

	const handleSubmit = (e) => {
		const value = e.target.value;
		setCountry(value.toLowerCase());
	};
	const handleNext = () => {
		console.log(Country);
		if (Country) navigate(`/${Country}`);
	};

	return (
		<>
			<div>Country</div>

			<select value={Country} onChange={handleSubmit}>
				<option value="Choose">Choose from option </option>
				<option value="usa">Usa </option>
				<option value="poland">Poland </option>
				<option value="other">Others </option>
			</select>

			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				Back
			</button>
			<button onClick={handleNext}>Next</button>
		</>
	);
};

export default Country;
