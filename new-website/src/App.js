import { BrowserRouter, Routes, Route } from "react-router-dom";
import MatrixBackground from "./pages/MatrixBackground";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MatrixBackground />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
