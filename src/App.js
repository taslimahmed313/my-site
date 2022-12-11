import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';

function App() {
  return <div className="max-w-5xl border mx-auto lg:px-8 px-4 border-teal-400">
    <Header></Header>
    <Home></Home>
  </div>;
}

export default App;
