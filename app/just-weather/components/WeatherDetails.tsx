const WeatherDetails = () => {
  return <div></div>;
};

export default WeatherDetails;

const DetailCard = ({ title, content, icon }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
};
