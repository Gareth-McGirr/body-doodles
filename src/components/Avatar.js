import React from "react";
import styles from "../styles/Avatar.module.css";

// component to display a users profile picture,
// a size for the avatar can be passed as a prop to allow 
// different size avatars to be displayed when needed with a default set 
// if a height isn't passed as a prop
const Avatar = ({ src, height = 45, text }) => (
  <span>
    <img
      className={styles.Avatar}
      src={src}
      height={height}
      width={height}
      alt="avatar"
    />
    {text}
  </span>
);

export default Avatar;
