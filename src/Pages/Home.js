const Home = () => {
  return (
    <div className="Home bg-image"  >
      {/* <div className="homeScreen"> </div> */}
        <div className="homeHdgBox">
          <h1 className="header">More than a RoomMate, Your <a href="https://www.urbandictionary.com/define.php?term=best%20mate" target="blank">BestMate</a></h1>
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
