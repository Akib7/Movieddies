import React from "react";
import { useSelector } from "react-redux";

import { userSelector } from "../../features/auth";
import "./profile.styles.scss";

const Profile = () => {
  const { user } = useSelector(userSelector);

  console.log(user);

  return (
    <div className="profile">
      <div>{`UserID - ${user.id}`}</div>
      <div>{`Name - ${user.username}`}</div>
    </div>
  );
};

export default Profile;
