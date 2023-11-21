import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bangla from "./pages/Bangla";
import English from "./pages/English";
import Math from "./pages/Math";
import Gk from "./pages/Gk";
import Banglaaloccobisoy from "./component/Banglaaloccobisoy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="bangla" element={<Bangla />} />
        <Route path="english" element={<English />} />
        <Route path="math" element={<Math />} />
        <Route path="gk" element={<Gk />} />
        <Route
          path="bangla/Banglaaloccobisoy"
          element={<Banglaaloccobisoy />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
