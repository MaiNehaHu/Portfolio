import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "./Neha.png";
import "./ProfilePhoto.scss";

const ProfilePhoto = () => {
  const className = "ProfilePhoto";
  const is820px = useMediaQuery("(max-width: 820px)");

  return (
    <div className={className}>
      <img src={Image} alt="Neha Kumari" />
      {!is820px ? (
        <div className="scroll-indicator">
          <div className="arrow"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfilePhoto;
