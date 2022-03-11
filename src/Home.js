import { useState, useEffect } from "react";
import ProfileList from "./ProfileList";

const Home = () => {
  const url = "https://backend-test-mike.herokuapp.com/";
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProfiles = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setIsLoading(false);
        setList(data);
      });
  };
  useEffect(() => {
    getProfiles();

    return () => {};
  }, []);

  if (isLoading) {
    return <p>loading.....</p>;
  }
  return (
    <>
      HomePage
      {list && <ProfileList list={list} />}
    </>
  );
};

export default Home;
