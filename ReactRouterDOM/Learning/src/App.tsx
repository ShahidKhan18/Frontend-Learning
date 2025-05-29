import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Dashboard/Profile";
import Help from "./components/Dashboard/Help";
import About from "./components/Dashboard/About";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

const DashboardWelecome = () => {
  return (
    <>
      <h1>Welcome Shahid, On dashboard Page</h1>
    </>
  );
};

const App = () => {
  const { user, logout } = useAuth();
  return (
    <div className="bg-black text-white ">
      {
        <nav className="flex p-4 gap-2">
          {user ? (
            <button onClick={logout}>LogOut</button>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
          <NavLink to={"/dashboard"}>dashboard</NavLink>
        </nav>
      }
      <div className="h-[calc(100vh-57px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardWelecome />} />
              <Route path="/dashboard/help" element={<Help />} />
              <Route path="/dashboard/about" element={<About />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <div className="flex justify-center items-center font-extrabold text-6xl h-screen">
                404:( : Page Not Found
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
