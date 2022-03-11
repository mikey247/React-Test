const Detail = ({ detail, profileDelete }) => {
  // 'https://backend-test-mike.herokuapp.com/delete/<pk>/
  return (
    <div>
      <h1>{detail.name}</h1>
      <h2>{detail.timestamp}</h2>
      <h3>{detail.id}</h3>
      <button onClick={profileDelete}>Delete</button>
    </div>
  );
};

export default Detail;
