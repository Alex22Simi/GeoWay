import Examene from "./pages/Examene/Examene";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/examene" element={<Examene />} />
        {/* <Route path="/examen/:an/:id" element={<Examene />} /> */}
      </Routes>
    </BrowserRouter>
    // <BrowserRouter
    // <div>
    //   <Home />
    // </div>
  );
}

export default App;
