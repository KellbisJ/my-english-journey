import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../routes/home";
import { Learn } from "../routes/learn";


const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn/:slug" element={<Learn />} />
    </Routes>
  )
}

export { App }
