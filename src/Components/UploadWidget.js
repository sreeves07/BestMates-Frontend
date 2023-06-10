import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MDBBtn } from 'mdb-react-ui-kit';
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useContextAuthProvider } from "../Firebase/context";
import logo from "../Images/LOGO_favicon.png" 

const API = process.env.REACT_APP_API_URL;

const UploadWidget = () => {
  const { user } = useContextAuthProvider();
  const { uid } = user;

  let [picUploadSuccess, setPicUploadSuccess] = useState(false)
  let [uploadURL, setUploadUrl] = useState("");
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dz9bggoim",
        uploadPreset: "hrc7za6l",
      },
      function (error, result) {
        if (result) {
          // console.log("Result:", result);
          if (result.event === "success") {
            // console.log(result.info.url);
            console.log(user);
            setUploadUrl(result.info.url);
          }
        }
        if (error) {
          console.error(error);
        }
      }
    );
  }, []);

  const imgUploadHandleSubmit = () => {
    if (uploadURL === "") {
      window.alert("Please upload an image.");
    }

    // console.log(uploadURL);

    axios
      .post(`${API}/user/${uid}/images`, {
        mate_uid: `${uid}`,
        profile_image: `${uploadURL}`,
      })
      .then((response) => {
        setPicUploadSuccess(true)
        console.log("user api response data for images=", response.data);
        // setImage(response.data[0].profile_image);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="upload-widget">   
        <img 
          id="profile-pic" 
          src={uploadURL || logo} 
          alt="avatar"
          onClick={() => widgetRef.current.open()} />
        {!uploadURL ? <span className="tooltiptext">Upload Image</span> : ""}
      {!picUploadSuccess ? <MDBBtn 
        className='sign-in-btn'
        id="uploadWidget-Btn2"
        onClick={imgUploadHandleSubmit}
      >
        <AiOutlineCloudUpload size="30"/>
      </MDBBtn> : <p><br></br>Upload Successful!</p>}
    </div>
  );
};
export default UploadWidget;
