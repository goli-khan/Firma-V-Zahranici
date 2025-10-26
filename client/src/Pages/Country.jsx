import { useNavigate } from "react-router-dom";
import Home from "../Components/Home";
import { useState } from "react";

const Country = () => {
	const navigate = useNavigate();
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (event) => {
		const value = event.target.value;
		setSelectedOption(value);

		if (value) navigate("/" + value.toLowerCase());
	};
	return (
		<div>
			<select value={selectedOption} onChange={handleChange}>
				<option value="chose an option">Select an option </option>
				<option value="Usa">Usa </option>
				<option value="Poland">Poland </option>
				<option value="Other">Other </option>
			</select>
			<button onClick={() => navigate(-1)}>goback</button>
		</div>
	);
};

export default Country;
