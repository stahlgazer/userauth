import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="logoutbutton" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    )
  );
};

export default Logout;
