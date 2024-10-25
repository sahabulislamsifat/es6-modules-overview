import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Watch from "./components/watch/watch";
import Sunglass from "./components/sunglass/sunglass";

function App() {
  const watches = [
    { id: 1, name: "Apple Watches", price: 20000 },
    { id: 2, name: "Smart Watches", price: 240000 },
    { id: 3, name: "Digital Watches", price: 65000 },
    { id: 4, name: "Analog Watches", price: 40000 },
    { id: 5, name: "Old Watches", price: 210000 },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ES-6-Overview</h1>
      
      {/* <Sunglass></Sunglass> */ }
    </>
  );
}

export default App;
