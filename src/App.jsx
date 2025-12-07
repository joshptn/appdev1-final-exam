import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Todos from "./pages/Todos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/appdev1-final-exam" element={<Home />} />
        <Route path="/appdev1-final-exam/login" element={<Login />} />
        <Route path="/appdev1-final-exam/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
