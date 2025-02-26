import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col items-center w-full h-fit overflow-x-hidden">
      <Header />
      <Home />
    </div>
  );
}

export default App;
