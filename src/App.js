import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';

function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="max-w-5xl border mx-auto lg:px-8 px-4 border-teal-400">
      <Header></Header>
      <Home></Home>
      <Toaster />
    </div>
  );
}

export default App;
