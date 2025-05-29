import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Dashboard/Profile";
import Help from "./components/Dashboard/Help";
import About from "./components/Dashboard/About";

const DashbaordWelecome=()=>{
  return (<>
    <h1>
      Welcome Shahid, On Dashbaord Page
    </h1>
  </>)
}

const App = () => {
  return (
    <div className="bg-black text-white ">
      <BrowserRouter>
        <nav className="flex p-4 gap-2">
          <NavLink to={"/dashbaord"}>Dashbaord</NavLink>
        </nav>
        <div className="h-[calc(100vh-57px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashbaord" element={<Dashboard />}>
              <Route index element={<DashbaordWelecome />} />
              <Route path="/dashbaord/help" element={<Help />} />
              <Route path="/dashbaord/about" element={<About />} />
              <Route path="/dashbaord/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App