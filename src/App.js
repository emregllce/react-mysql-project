import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/addContact" element={<AddEdit />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
