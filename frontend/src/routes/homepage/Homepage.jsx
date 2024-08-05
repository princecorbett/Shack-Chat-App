import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");


  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>SHACK AI</h1>
        <h2>Unlock Your Creative Potential !</h2>
        <h3>
        The Ultimate hub for all your AI-Driven inquiries. Use it as your go-to tool for answering questions
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.png"
                  : typingStatus === "human2"
                  ? "/human2.jpg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "P1: AI, what's your favorite type of humor?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI: I'd say I'm into programmatic jokes.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "P2: That's a bit code'pendent!",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "AI: I'm always up for a good byte of humor!",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;