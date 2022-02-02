const InterestCard = (props) => {
  const { id, imageUrl, title, description } = props.interest;
  // console.log(id, imageUrl, title, description);
  return (
    <>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

export default InterestCard;
