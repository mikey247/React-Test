import { useNavigate } from "react-router-dom";
import CreateProfileForm from "./CreateProfileForm";

const CreateProfile = () => {
  const navigate = useNavigate();

  const addProfileHandler = (formData) => {
    fetch("https://backend-test-mike.herokuapp.com/create/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/home");
      console.log("profile added");
    });
  };

  return (
    <>
      <h1>Add Profile</h1>
      <CreateProfileForm addProfileHandler={addProfileHandler} />
    </>
  );
};

export default CreateProfile;
