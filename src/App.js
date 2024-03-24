//import React from "react";
import React, { useState } from "react";
import "./App.css"; // import your CSS file for styling

/*import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function DeviceCard({
  title,
  description,
  icon,
  usageCount,
  usageTime,
  currentMode,
}) {
  const [powerButtonClicked, setPowerButtonClicked] = useState(false);
  const handlePowerButtonClick = () => {
    // Perform any desired action on button click
    // For example, fetch data or toggle some state
    setPowerButtonClicked(true);
    setTimeout(() => {
      setPowerButtonClicked(false);
    }, 1000);
  };

  return (
    <div className="device-card">
      <div className="card-header">
        <div className="device-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="device-icon">
          <FontAwesomeIcon icon={icon} size="2xl" />
        </div>
      </div>
      <div className="card-content">
        <div className="info">
          <div className="row">
            <span className="icon">
              <FontAwesomeIcon icon={faM} rotation={270} size="sm" />
            </span>
            <p>
              <strong>Usage count:</strong> {usageCount} times
            </p>
          </div>
          <div className="row">
            <span className="icon">
              <FontAwesomeIcon icon={faClockRotateLeft} size="sm" />
            </span>
            <p>
              <strong>Usage time:</strong> {usageTime} mins
            </p>
          </div>
          <div className="row">
            <span className="icon">
              <FontAwesomeIcon icon={faPowerOff} size="sm" />
            </span>
            <p>
              <strong>Current mode:</strong> {currentMode}
            </p>
          </div>
        </div>
      </div>
      <button
        className={`card-footer ${powerButtonClicked ? "dark-gray" : ""}`}
        onClick={handlePowerButtonClick}
      >
        Power
      </button>
    </div>
  );
}

function App() {
  // Dummy data for demonstration
  const pumpData = {
    title: "Pump",
    description: "Plant irrigation",
    icon: faDroplet,
    usageCount: 5,
    usageTime: 10,
    currentMode: "Manual",
  };

  const fanData = {
    title: "Fan",
    description: "Temperature regulation",
    icon: faFan,
    usageCount: 5,
    usageTime: 10,
    currentMode: "Manual",
  };

  return (
    <div className="app">
      <header>
        <h1 className="devices-title">Devices</h1>
        <a href="/somewhere-to-go" className="danger-zone">
          Danger Zone
        </a>
      </header>
      <main>
        <div className="container">
          <DeviceCard {...pumpData} />
          <DeviceCard {...fanData} />
        </div>
      </main>
    </div>
  );
}

export default App;
