import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../routes/home";


const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export {App}
