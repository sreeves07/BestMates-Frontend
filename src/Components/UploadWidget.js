import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useContextAuthProvider } from "../Firebase/context";

const API = process.env.REACT_APP_API_URL;

const UploadWidget = () => {
  const { user } = useContextAuthProvider();
  const { uid } = user;

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
            setUploadUrl(result.info.url);
          }
        }
        if (error) {
          console.error(error);
        }
      }
    );
  }, []);

  const imgUploadHandleSubmit = (() => {
    if (uploadURL === "") {
      window.alert("Please upload an image.");
    }

    console.log(uploadURL);
  }, []);



    axios
      .patch(`${API}/user/${uid}/image`, {
        profile_image: uploadURL,
      })
      .then((response) => {
        console.log("user api response data for images=", response.data);
        // setImage(response.data[0].profile_image);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div>
      <button
        className="uploadWidget-Btn sign-in-btn"
        onClick={() => widgetRef.current.open()}>
        <AiOutlineCloudUpload size="30"/>
      </button>
      <button className='sign-in-btn' onClick={imgUploadHandleSubmit}>Submit Image</button>
    </div>
  );
};

export default UploadWidget;
