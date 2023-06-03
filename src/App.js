import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
// import Login from "./Login";
// import Homepage from "./pages/homepage/Homepage";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/aboutus/About";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import AdminDashBoard from "./pages/admin/AdminDashBoard/AdminDashBoard";
  import UserProfile from "./pages/users/UserProfile/UserProfile";
  import AdminProductEdit from "./pages/admin/AdminProductEdit/AdminProductEdit";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./cart/Cart";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/product/details/:id" element={<ProductDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />       
        <Route path="/aboutus" element={<About/>} />   
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/admin-dashboard" element={<AdminDashBoard/>}></Route>
        <Route path="/admin/product/edit/:id" element={<AdminProductEdit/>}/>
        <Route path="/UserProfile" element={<UserProfile/>}/>
      </Routes>
    </Router>
    </>
  );
};



export default App;
