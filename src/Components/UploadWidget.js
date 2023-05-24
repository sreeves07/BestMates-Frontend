import { useEffect, useRef, useState } from "react";

const UploadWidget = () => {
  let [uploadURL, setUploadUrl] = useState("");
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
  }, []);

  return (
    <button onClick={() => widgetRef.current.open()}>Upload Photos</button>
  );
};

export default UploadWidget;
