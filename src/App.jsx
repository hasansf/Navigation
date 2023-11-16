import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar/Navigation";




import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Pages from "./pages/page/Pages";
import UserDashboard from "./pages/userDashbord/UserDashboard";
import Contact from "./pages/contact/Contact";
import About from "./pages/aboutUs/About";


const App = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path= '/' element = {<Home/>} />
                <Route path= '/shop' element = {<Shop/>} />
                <Route path= '/about' element = {<About/>} />               
                <Route path= '/pages' element = {<Pages/>} />               
                <Route path= '/userdashbord' element = {<UserDashboard/>} />
                <Route path= '/contact' element = {<Contact/>} />
            </Routes>


  
        </div>
    );
};

export default App;