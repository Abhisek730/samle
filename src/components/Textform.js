import React, { useState } from "react";

export default function Textform(props) {
  const handleOnClick = () => {
    console.log("uppercase was closed");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };
  const handleLowOnClick = () => {
    console.log("LowerCase was closed");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    console.log("uppercase was Changed");
    setText(event.target.value);
  };
  const clearOnClick = (event) => {
    setText("");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  };
  const extraSpaceRemover = () => {
    var text = document.getElementById("myBox");
    let found = text.value.replace(/\s+/g, " ");
    setText(found);
    props.showAlert("spaces remove", "success");
  };
  const [text, setText] = useState("");
  //text = "new Text" // worng way to change the state;
  //setText('Please enter your text here')// correct way to change state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-danger" onClick={handleOnClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowOnClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-3" onClick={clearOnClick}>
          Clear Text
        </button>
        <button className="btn btn-info mx-3" onClick={extraSpaceRemover}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.replace(/\s/g, "").length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          minutes reading
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
