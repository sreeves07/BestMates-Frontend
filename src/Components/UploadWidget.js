import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AiOutlineCloudUpload } from "react-icons/ai"

const UploadWidget = () => {
  let [uploadURL, setUploadUrl] = useState("");
  const API = process.env.REACT_APP_API_URL;
  const CLOUD_NAME = process.env.CLOUD_NAME;
  const CLOUD_PRESET = process.env.CLOUD_PRESET;
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
          console.log("Result:", result);
          if (result.event === "success") {
            console.log(result.info.url);
            setUploadUrl(result.info.url);
          }
        }
        if (error) {
          console.error(error);
        }
      }
    );

    axios
      .post(`${API}/user`)
      .then((response) => {
        console.log("user api response data for images=", response.data);
        // setImage(response.data[0].profile_image);
     })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <button id="uploadWidget-Btn" onClick={() => widgetRef.current.open()}><AiOutlineCloudUpload size="3s0"/></button>
  );
};

export default UploadWidget;