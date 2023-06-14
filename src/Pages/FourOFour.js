import fourOFourImg from "../Images/404_image.png";

const FourOFour = () => {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "100px",
        boxShadow: "2px 2px 5px var(--darkMainColor)",
        borderRadius: "25px",
        width: "500px",
      }}>
      <img src={fourOFourImg} alt="404" />
    </div>
  );
};
export default FourOFour;
