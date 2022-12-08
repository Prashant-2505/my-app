import React, { useState } from "react";

export default function TextForm(props) {
    const handelUpCLick = () => {
        console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handelUpCLick2 = () => {
        let newText = "";
        setText(newText);
    };

    const handelOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    };

    // react state of hooks   ===> ti use arry destructring where text  ==>is default value and settext==> use to change the deafult value
    const [text, setText] = useState(" ");

    return (
        <>
            <div className="conainer" style={{color: props.mode===`light`?`black`:'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode===`light`?`white`:'grey',color: props.mode===`light`?`black`:'white'}} id="myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUpCLick}>
                    convert to uppercase
                </button>
                <button className="btn btn-success" onClick={handelUpCLick2}>
                    clear
                </button>
            </div>
            <div className="container my-2" style={{color: props.mode===`light`?`black`:'white'}}>
                <h1>Your text summary</h1>
                <p>{text.length} characters and {text.split(" ").length} words</p>
            </div>
        </>
    );
}
