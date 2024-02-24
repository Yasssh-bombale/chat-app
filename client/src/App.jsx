import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContextProvider";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Router>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/signin"} />}
          />
          <Route
            path="/signin"
            element={authUser ? <Navigate to={"/"} /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <SignUp />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
