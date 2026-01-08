import { useContext, useState } from "react";
import { createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
	const [currentState, setCurrentState] = useState(1);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		Document: [],
	});

	const next = () => {
		setCurrentState((prev) => {
			return prev + 1;
		});
	};

	const prev = () => {
		setCurrentState((prev) => {
			return prev - 1;
		});
	};

	const updateForm = (data) => {
		setFormData((prev) => ({
			...prev,
			...data,
		}));
	};

	const value = { currentState, next, prev, updateForm, formData };
	return <FormContext.Provider value={value}>{children} </FormContext.Provider>;
};

export const useCustomForm = () => {
	const context = useContext(FormContext);
	if (!context) throw new Error("there is no context");
	return context;
};
