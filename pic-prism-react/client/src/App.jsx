import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import BuyerDashboard from "./pages/BuyerDashboard"
import SellerDashboard from "./pages/SellerDashboard"
import Home from "./pages/Home"


export default function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/buyer" element={<BuyerDashboard/>}/>
    <Route path="/seller" element={<SellerDashboard/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}