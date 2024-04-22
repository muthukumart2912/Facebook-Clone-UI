import "./App.css";
import Profile from "./Components/Profile";
import Homepage from "./Pages/Homepage";
import { Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <>
     <Routes>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

     </Routes>
    </>
  );
}

export default App;
