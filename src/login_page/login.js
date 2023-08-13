import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Landing from "../landing_page/landing";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="log">
      <Landing/>
      <div className="btn-1">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </div>
    
  );
};

export default LoginButton;