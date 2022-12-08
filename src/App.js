
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {


  const [mode, setmode] = useState('dark');

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      document.title = 'dark-mode enabled'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'textUtils'
    }
  }


  const green = () => {
    if (document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === 'grey' || document.body.style.backgroundColor === 'yellow') {
      document.body.style.backgroundColor = 'green'
      console.log(document.body.style.backgroundColor)
    }
    else {
      document.body.style.backgroundColor = 'white'
      console.log("clicked")
    }
  }

  const yellow = () => {
    if (document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === 'green' || document.body.style.backgroundColor === 'grey') {
      document.body.style.backgroundColor = 'yellow'
      console.log(document.body.style.backgroundColor)
    }
    else {
      document.body.style.backgroundColor = 'white'
      console.log("clicked")
    }
  }


  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutText="about us" mode={mode} togglemode={togglemode} green={green} yellow={yellow} />
        <div className="container">
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode}  />}>
            </Route>
          </Routes>
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
