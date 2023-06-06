import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
// import image1 from "../Images/capstone-composite1-small.png";
import image1 from "../Images/roommates-composite-with-veneers.png"
import image2 from "../Images/Capstone-compositeGrp2-small.png"
import image3 from "../Images/Capstone-compositeGrp3-veryLarge.png"
import image4 from "../Images/Capstone-compositeGrp4-lotsOfBoxes.png"

const Home = () => {
  return (
    <div className="Home"  >
      {/* <div className="homeScreen"> </div> */}
        <div className="homeHdgBox">
          <h3 className="header">Not 
          Just a RoomMate... Find Your <a className="bestMate-wordLink"  href="https://www.urbandictionary.com/define.php?term=best%20mate" target="blank">BestMate</a></h3>
       </div>
        

        <div className="home-image-box ">
          {/* <div className="homeImage1 bg-image"></div>
          <div className="homeImage2 bg-image"></div>
          <div className="homeImage3 bg-image"></div>
          <div className="homeImage4 bg-image"></div> */}
           <AliceCarousel 
                infinite="true" 
                autoPlay 
                duration={400}
                autoPlayInterval={4000}
                transitionDuration={50000}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                fadeOutAnimation={true}
           >
                <img src={image1} className="image1"/>
                <img src={image2} className="image2"/>
                <img src={image3} className="image3"/>
                <img src={image4} className="image4"/>

          </AliceCarousel> 
        </div>
      
    </div>
  );
};
export default Home;


// will render the signup/login component if user is not signed up or if user is not logged in

// < Signup/Login />

//will render the users home if the user is signed up and is logged in

// <UserHome />
