import { useState } from "react";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-slate-900 p-4 h-screen flex items-center justify-center">
        <Home />
      </div>
    </>
  );
}

export default App;
