import { useFormContext } from "react-hook-form";

const Step1 = () => {
	const { register } = useFormContext();
	return (
		<>
			<input {...register("name")} placeholder="name" />
		</>
	);
};

export default Step1;
