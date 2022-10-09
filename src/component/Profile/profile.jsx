import React from "react";
import { useSelector } from "react-redux";

import { userSelector } from "../../features/auth";
import "./profile.styles.scss";

const Profile = () => {
  console.log("Profile");

  const { user } = useSelector(userSelector);
  return <div className="profile">{`UserID - ${user.id}`}</div>;
};

export default Profile;
