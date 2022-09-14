import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, newAlert] = useState("");
  // const remover = setTimeout(() => {
  //   newAlert(null);
  // }, 2000);

  const showAlert = (message, type) => {
    newAlert({
      msg: message,
      type: type,
    });
    // setTimeout(function () {
    //   newAlert(null);
    // }, 2000);
    setTimeout(() => {
      newAlert(null);
    }, 2000);
  };

  const redColor = () => {
    document.body.style.backgroundColor = "red";
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      //document.body.style.color="black"
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");

      // document.body.style.color="white"
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="aboutTextutils"
          mode={mode}
          toggleMode={toggleMode}
          redColor={redColor}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter Your text to analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
