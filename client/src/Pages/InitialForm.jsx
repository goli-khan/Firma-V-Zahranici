import { useNavigate } from "react-router-dom";

const InitialForm = () => {
  const handleNavigation = () => {
    const navigate = useNavigate();
    navigate("/initialpage");
  };
  return (
    <div>
      <button onClick={handleNavigation}>Press this button to start</button>
    </div>
  );
};

export default InitialForm;
