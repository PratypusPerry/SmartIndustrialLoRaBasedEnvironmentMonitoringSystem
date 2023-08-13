import "../landing_page/landing.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import img1 from "./rectangle-3.svg"
import img2 from "./screenshot-20230812-at-421-1@2x.png"
const Landing = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    
    <div className="desktop-1">
      <div className="desktop-1-child" />
      <div className="smart-industrial-lora">{`Smart Industrial Lora based Monitoring System `}</div>
      <div className="loraenvirolink">LoRaEnviroLink</div>
      <div className="desktop-1-item" />
      <div className="login"><button onClick={() => loginWithRedirect()}>Log In</button></div>
      <img className="desktop-1-inner" alt="" src={img1} />
      <div className="get-started">Get Started!</div>
      <div className="welcome-to-loraenvirolink">
        Welcome to LoRaEnviroLink, your ultimate solution for precise industrial
        temperature and humidity monitoring. Our cutting-edge LoRa-based master
        and end nodes offer unparalleled accuracy in tracking vital
        environmental conditions. Seamlessly monitor numerous nodes through an
        intuitive user interface, empowering you to set custom thresholds and
        receive real-time alerts. From sprawling factories to critical storage
        facilities, our system ensures uninterrupted operations, prevents costly
        damages, and guarantees compliance. Effortlessly access organized
        historical data for informed decision-making and process optimization.
        Elevate your industrial automation with LoRaEnviroLink and take control
        of your environment with confidence.
      </div>
      <img
        className="screenshot-2023-08-12-at-421-icon"
        alt=""
        src={img2}
      />
    </div>
  );
};

export default Landing;
