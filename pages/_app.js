import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-blue-bg">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
