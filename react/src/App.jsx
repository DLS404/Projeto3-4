import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";
import { ItemProvider } from "./context/ItemContext";

export default function App() {
  return (
    <ItemProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Router>
    </ItemProvider>
  );
}
