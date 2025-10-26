import { useState } from "react";
import Sulzby from "../Components/Sulzby";
import Info from "../Components/Info";
import { useNavigate } from "react-router-dom";

const Usa = () => {
	const navigate = useNavigate();
	const [active, setActive] = useState("sulzby");
	const [selectCountry, setSelectCountry] = useState("usa");
	const [selectCity, setSelectCity] = useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setSelectCountry(value);

		if (value) navigate("/" + value);
	};

	const handleChangeCity = (e) => {
		const value = e.target.value;

		setSelectCity(value);
	};

	return (
		<>
			<aside>
				<button onClick={() => setActive("sulzby")}>Obsah Sulzby</button>
				<button onClick={() => setActive("info")}>Viac Info</button>

				<div>{active === "sulzby" ? <Sulzby /> : <Info />}</div>
			</aside>

			<section id="selection">
				<select value={selectCountry} onChange={handleChange}>
					<option value="usa">Usa</option>
					<option value="poland">Poland</option>
					<option value="other">Others</option>
				</select>

				{selectCountry === "usa" && (
					<select value={selectCity} onChange={handleChangeCity}>
						<option value="wioming">Wioming</option>
						<option value="daleware">Dalware</option>
					</select>
				)}
			</section>
			<section id="bottom-buttons"></section>
		</>
	);
};

export default Usa;
