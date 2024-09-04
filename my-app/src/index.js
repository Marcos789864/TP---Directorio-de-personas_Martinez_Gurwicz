import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}


root.render(<App />);


