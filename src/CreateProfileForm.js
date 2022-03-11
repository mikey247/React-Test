import { useRef } from "react";

const CreateProfileForm = ({ addProfileHandler }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const formData = {
      name: enteredName,
      age: enteredAge,
    };
    addProfileHandler(formData);
  }
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Create Profile</label>
          <input type="text" name="name" id="name" ref={nameInputRef} />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" ref={ageInputRef} />
        </div>
        <button>SUBMIT</button>
      </form>
    </>
  );
};

export default CreateProfileForm;
