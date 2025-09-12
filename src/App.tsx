import "./App.css";
import Home from "./shared/Home";
import { Routes, Route } from "react-router-dom";
import { AdminRoutes } from "./routes/adminRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {AdminRoutes()}
    </Routes>
  )
}

export default App;