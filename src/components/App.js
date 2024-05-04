import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";

// import username from "./user.js";
// import city from "./user.js";
// import image from "./user.js";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* <username />
      <city />
      <image /> */}
    </div>
  );
}

export default App;
