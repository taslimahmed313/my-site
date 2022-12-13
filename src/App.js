import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { router } from "./Router/Router";

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="max-w-5xl bg-[#0A192F] mx-auto lg:px-8 px-4">
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
