const ProfileList = ({ list }) => {
  return (
    <>
      {list.map((profile) => (
        <div key={profile.id}>
          <h1>{profile.name}</h1>
          <h3>{profile.timestamp}</h3>
          <p>{profile.id}</p>
        </div>
      ))}
    </>
  );
};

export default ProfileList;
