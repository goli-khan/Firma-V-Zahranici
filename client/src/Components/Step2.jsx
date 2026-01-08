import { useFormContext } from "react-hook-form";
const Step2 = () => {
	const { register } = useFormContext();
	return (
		<>
			<input {...register("email")} placeholder="email" />
		</>
	);
};

export default Step2;
