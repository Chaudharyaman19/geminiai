import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
import amanavatrr from "/src/assets/amanavatrr.webp";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };
  const handleKeyPress = (event) => {
    console.log("hello");
    if (event.key === "Enter") {
      onSent();
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Aman.ai</p>
        <img src={amanavatrr} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>
                  <span style={{ fontSize: "45px" }}>नमस्ते</span> , Aman{" "}
                </span>
              </p>
              <p>How Can i Help You Today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest Some Place To Visit In Kerala")
                }
              >
                <p>
                  Maintaining a healthy lifestyle is crucial for both physical
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              >
                <p>The rapid evolution of technology has</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("How to Create a Gyroscope using Disc?")
                }
              >
                <p>These advancements offer endless opportunities,</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() => {
                  handleCardClick(
                    "Create a Script for the youtube video about coding "
                  );
                }}
              >
                <p>Traveling opens the door to new cultures,</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={amanavatrr} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onKeyPress={handleKeyPress}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Maintaining a healthy lifestyle is crucial for both physical and
              mental well-being. A balanced diet,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
