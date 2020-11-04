import React from "react";
import { Link } from "react-router-dom";


const UsersInfo = ({ name  , email, gen, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id)
  }
  return (
    <div className="userInfo">
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <h3>Gen: {gen}</h3>
      <button onClick={handleClick} className="remove-user">Remove User</button>
      <Link to= { `/edit/${id}` } className="edit-User">Edit User</Link>
      <hr />
    </div>
  );
};

export default UsersInfo;
