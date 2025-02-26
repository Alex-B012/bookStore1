import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Book from "./pages/Book";

function App() {
  return (
    <div className="flex flex-col items-center w-full h-fit overflow-x-hidden ">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchResults />}></Route>
          <Route path="/books/:id" element={<Book />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
