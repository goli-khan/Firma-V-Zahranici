import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Usa = () => {
	const navigate = useNavigate();
	const [Country, setCountry] = useState("usa" || "");
	const [City, setCity] = useState("");

	const handleCountry = (e) => {
		const value = e.target.value;
		setCountry(value);
	};

	const handleCity = (e) => {
		const value = e.target.value;
		setCity(value);
	};

	return (
		<>
			<select value={Country} onChange={handleCountry}>
				<option value="choose">Select and opitn</option>
				<option value="usa">Usa</option>
				<option value="poland">poland</option>
				<option value="other">Others</option>
			</select>
			{Country === "usa" && (
				<div>
					<select value={City} onChange={handleCity}>
						<option value="choose">Select an option</option>
						<option value="wioming">Wioming</option>
						<option value="delaware">Delaware</option>
					</select>
				</div>
			)}

			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				Back
			</button>
			<button
				onClick={() => {
					Country ? navigate(`/ ${Country} / ${City}  `) : navigate(`/*`);
				}}
			>
				Next
			</button>
		</>
	);
};

export default Usa;
