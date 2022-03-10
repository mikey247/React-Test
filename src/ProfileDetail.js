import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail";

const ProfileDetail = () => {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const getProfileDetail = () => {
    fetch(`https://backend-test-mike.herokuapp.com/retrieve/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetail(data);
        setIsLoading(false);
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
      <div>{detail && <Detail detail={detail} />}</div>
    </>
  );
};

export default ProfileDetail;
