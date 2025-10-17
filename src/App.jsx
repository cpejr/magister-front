import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Questions from "./pages/Questions/Questions";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

      <Route
        path="/painel"
        element={
          <PrivateRoute>
            <h1>Página restrita</h1>
          </PrivateRoute>
        }
      />

      <Route
        path="/questions"
        element={
          <PrivateRoute>
            <Questions />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
