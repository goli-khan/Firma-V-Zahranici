import { useNavigate } from "react-router-dom";

const Fuck = () => {
	const navigate = useNavigate();

	return (
		<div>
			Fuck
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
};

export default Fuck;
