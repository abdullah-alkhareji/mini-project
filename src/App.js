import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MembersList from "./components/MembersList";
import MemberProfile from "./components/MemberProfile";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className="container-fluid p-0 bg-light app">
      <NavBar />
      <div className="container h-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MembersList />} />
          <Route path="/members/:slug" element={<MemberProfile />} />
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:slug" element={<BookDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
