import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileUpdateForm = ({ details }) => {
  const [name, setName] = useState(details.name);
  const [age, setAge] = useState(details.age);
  const navigate = useNavigate();
  //   console.log(name, age);

  const handleUpdateForm = (e) => {
    e.preventDefault();

    const data = { name: name, age: age };

    fetch(`https://backend-test-mike.herokuapp.com/update/${details.id}/`, {
      method: "PUT",
      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/home");
      console.log("profile updated");
    });
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleUpdateForm}>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button>Update Profile</button>
        </form>
      </div>
    </>
  );
};

export default ProfileUpdateForm;
