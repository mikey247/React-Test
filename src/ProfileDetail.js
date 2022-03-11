import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Detail from "./Detail";

const ProfileDetail = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProfileDetail = () => {
    fetch(`https://backend-test-mike.herokuapp.com/retrieve/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetail(data);
        setIsLoading(false);
      });
  };

  const profileDelete = () => {
    fetch(`https://backend-test-mike.herokuapp.com/delete/${id}/`, {
      method: "DELETE",
    }).then(() => {
      navigate("/home");
      console.log("profile deleted");
    });
  };

  useEffect(() => {
    getProfileDetail();
    return () => {};
  }, [id]);

  if (isLoading) {
    return <p>loading.....</p>;
  }

  return (
    <>
      <div>
        {detail && <Detail detail={detail} profileDelete={profileDelete} />}
      </div>
    </>
  );
};

export default ProfileDetail;
