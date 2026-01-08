import { useFormContext } from "react-hook-form";
const Step3 = () => {
	const { register } = useFormContext();
	return (
		<>
			<input {...register("password")} placeholder="password" />
		</>
	);
};

export default Step3;
