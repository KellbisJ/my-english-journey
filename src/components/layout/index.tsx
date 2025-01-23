import React from "react"
import { Header } from "../header";
import { Footer } from "../footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow p-2 bg-stone-100 dark:bg-gray-950 dark:text-black transition">
        {children}
      </main>
      <Footer/>
    </div>
  );
};
export {Layout}