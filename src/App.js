import Login from "./component/login/Login";
import PrivateRoute from "./PrivateRoute";

import "./App.css";
import SidebarWithHeader from "./component/sidebar/SidebarWithHeader";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home.jsx";
import BlogListing from "./component/blog/BlogListing";

import UserDetails from "./component/user/UserDetails";
import UserListing from "./component/user/UserListing.jsx";
import Blog from "./component/blog/Blog";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CSSReset />
        <SidebarWithHeader>
          
          <Routes>
            <Route path="/user" element={<UserListing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<BlogListing />} />
            <Route
              path="/blog/:id"
              element={
                <PrivateRoute>
                  <Blog />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route path="/user-details/:id" element={<UserDetails />} />
          </Routes>
        </SidebarWithHeader>
      </div>
    </ChakraProvider>
  );
}

export default App;
