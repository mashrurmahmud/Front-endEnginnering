import React, { useRef, useState } from "react";
import { FaCamera, FaCloudUploadAlt } from "react-icons/fa";

const ProfileUpload = () => {
  const [image, setImage] = useState(null);
  const fileRef = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Profile Photo
      </h2>

      {/* Profile Preview */}
      <div className="flex justify-center mb-8">

        <div className="relative">

          <img
            src={
              image ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="w-48 h-48 rounded-full object-cover border-4 border-gray-200"
          />

          <button
            type="button"
            onClick={() => fileRef.current.click()}
            className="absolute bottom-3 right-3 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
          >
            <FaCamera />
          </button>
        </div>

      </div>

      {/* Upload Area */}

      <label
        htmlFor="photo"
        className="border-2 border-dashed border-blue-300 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
      >
        <FaCloudUploadAlt
          className="text-6xl text-blue-600 mb-4"
        />

        <p className="text-xl font-semibold text-blue-600">
          Click to Upload
        </p>

        <p className="text-gray-500 mt-2">
          JPG, PNG or GIF (Max 2MB)
        </p>

        <input
          id="photo"
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
      </label>
      

      <p className="mt-6 text-gray-500 text-center">
        Upload a clear profile picture. This image will be visible
        to employers.
      </p>
    </div>
  );
};

export default ProfileUpload;