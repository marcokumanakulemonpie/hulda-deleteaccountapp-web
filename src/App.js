import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Success from "./components/Success";
import Error from "./components/Error";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
