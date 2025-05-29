import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
const App = () => {
  return (
    <div className="bg-black text-white ">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App