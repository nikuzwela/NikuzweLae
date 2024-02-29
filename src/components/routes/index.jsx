import React from "react";
import { Routes, Route } from "react-router-dom";
import Landingpage from "../home/landingpage";
import Blogs from "../newsblogs/blogs"
import Login from "../admin/login";
import Signup from "../admin/signup";
import Portifolio from "../porti/portifolio";


const Index= () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Portifolio" element={<Portifolio/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Index;