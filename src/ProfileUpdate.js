import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileUpdateForm from "./ProfileUpdateForm";

const ProfileUpdate = () => {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getProfileData = () => {
    fetch(`https://backend-test-mike.herokuapp.com/retrieve/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getProfileData();
    return () => {};
  }, [id]);

  if (isLoading) {
    return <p>loading.....</p>;
  }

  return (
    <>
      update profile
      <div>{details && <ProfileUpdateForm details={details} />}</div>
    </>
  );
};

export default ProfileUpdate;
