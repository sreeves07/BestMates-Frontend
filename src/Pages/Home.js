const Home = () => {
  return (
    <div className="Home bg-image"  >
      <div className="homeHdgBox">
        <h1 className="header">Welcome to BestMates</h1>
      </div>
      <div className="home-image-grid  bg-image  ">
        <div className="homeImage1 bg-image"></div>
        <div className="homeImage2 bg-image"></div>
        <div className="homeImage3 bg-image"></div>
        <div className="homeImage4 bg-image"></div>
      </div>
    </div>
  );
};
export default Home;


// will render the signup/login component if user is not signed up or if user is not logged in

// < Signup/Login />

//will render the users home if the user is signed up and is logged in

// <UserHome />
