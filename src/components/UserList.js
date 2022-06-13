import React from "react";

const userList = ({ user }) => {
  return (
    <div className="user">
      <h5>surname : {user.username}</h5>
      <h4>name : {user.name}</h4>
    </div>
  );
};

export default userList;
