import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./login.css";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(Logout());
  };
  return (
    <div className="log">
      <h1>
        Welcome <span className="user-name">{user.name}</span>
      </h1>
      <button className="logout-button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
