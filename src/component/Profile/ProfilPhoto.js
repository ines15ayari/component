import React from "react";
import srcimage from "./photo.jpg"
import "./ProfilPhoto.css";


const profileph = () => {
 return (
   <>
    <img className="p" src={srcimage} height="400" width="500" alt="profile photo"/>
   </>
 );
};
export default profileph;