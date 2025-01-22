import React from "react"
import { Footer } from "../footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-2">
        {children}
      </main>
      <Footer/>
    </div>
  );
};
export {Layout}