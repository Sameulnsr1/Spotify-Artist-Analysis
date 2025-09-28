const Metrics = ({ trackData }) => {
  return (
    <div>
      <h1>{trackData ? trackData.items[0].name : "Data is Loading"}</h1>
    </div>
  );
};

export default Metrics;
