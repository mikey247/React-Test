const Detail = ({ detail }) => {
  return (
    <div>
      <h1>{detail.name}</h1>
      <h2>{detail.timestamp}</h2>
      <h3>{detail.id}</h3>
    </div>
  );
};

export default Detail;
