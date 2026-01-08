import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useCustomForm } from "../Context/FormFlow";
import Step1 from "../Components/Step1";
import Step2 from "../Components/Step2";
import Step3 from "../Components/Step3";

const NewCompany = () => {
	const navigate = useNavigate();
	const { currentState, next, prev, updateForm } = useCustomForm();
	const methods = useForm({
		mode: "onTouched",
	});
	const handleNext = async () => {
		const isStepValid = await methods.trigger();
		if (!isStepValid) return;

		const value = methods.getValues();
		updateForm(value);

		if (currentState < 3) next();
		else methods.handleSubmit(onSubmit)();
	};

	const handleBack = () => {
		if (currentState === 1) {
			navigate(-1);
		} else {
			prev();
		}
	};

	const onSubmit = (data) => {
		console.log("form submitted", data);
		if (currentState > 3) navigate("/login");
	};
	return (
		<>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<h1>{currentState === 1 && <Step1 />}</h1>
					<h1>{currentState === 2 && <Step2 />}</h1>
					<h1>{currentState === 3 && <Step3 />}</h1>
					<button type="button" onClick={handleNext}>
						{currentState >= 3 ? <p>Submit</p> : <p>Next</p>}
					</button>
					<button type="button" onClick={handleBack}>
						Back
					</button>
				</form>
			</FormProvider>
		</>
	);
};

export default NewCompany;
