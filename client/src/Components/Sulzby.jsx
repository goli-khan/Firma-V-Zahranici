import { useState } from "react";

const Sulzby = () => {
	const value = 85.8;
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckbox = (e) => {
		setIsChecked(e.target.value);
	};
	return (
		<>
			<label>
				<input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
				Accpet term and conditions
			</label>
			<p>{isChecked ? value - 40 : value}</p>
		</>
	);
};

export default Sulzby;
