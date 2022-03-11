import { Link } from "react-router-dom";
const ProfileList = ({ list }) => {
  return (
    <>
      {list.map((profile) => (
        <Link to={`/${profile.id}`} key={profile.id}>
          <div>
            <h1>{profile.name}</h1>
            <h3>{profile.timestamp}</h3>
            <p>{profile.id}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProfileList;
