import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        //console.log("Lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick =()=>{
      //console.log("Lower case was clicked" + text);
      let newText = '';
      setText(newText);
  }
    const handleOnChange =(event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]= useState('Enter text here');
    // text="new text";
    // setText("new text");
  return (
    <>
  <div className="container">
    <h1>{props.heading}</h1>   
    <div className="form-group">
    <textarea className="form-control" value= {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-success mx-2" onClick = {handleUpClick}>Convert to upper case</button>
  <button className="btn btn-success mx-2" onClick = {handleLoClick}>Convert to lower case</button>
  <button className="btn btn-success mx-2" onClick = {handleClearClick}>Clear text</button>
  </div>
  <div className="container my-3">
      <h1>Your text summary</h1>
      <p> {text.split("").length} words, {text.length} charactors</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
  </>
  )
}
