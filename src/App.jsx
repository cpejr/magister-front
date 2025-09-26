import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

      {}
      <Route
        path="/painel"
        element={
          <PrivateRoute>
            <h1>Página restrita</h1>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
