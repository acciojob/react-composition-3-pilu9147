
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
        <Tooltip text="this is a tooltip">Hover over me</Tooltip>
      <Tooltip text="this is a another tooltip">Hover over me to se another tooltip</Tooltip>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
