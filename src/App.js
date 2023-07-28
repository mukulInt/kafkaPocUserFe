
import './App.css';
import SidebarWithHeader from './component/sidebar/SidebarWithHeader';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import {Routes,Route} from "react-router-dom";
import Home from './component/home/Home.jsx';
import Blog from './component/blog/Blog';

import UserDetails from "./component/user/UserDetails";
import UserListing from "./component/user/UserListing.jsx";


import BlogViewActivity from './component/blog/BlogViewActivity';



function App() {
  return (

    <ChakraProvider>
    <div className="App">
    <CSSReset />
      {/* <h1>hey its woking</h1> */}
      {/* <NavBar></NavBar> */}
      {/* <Nav></Nav> */}
      <SidebarWithHeader>
        <Routes>
          <Route path='/user' element={<UserListing/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />

          <Route path='/user-details/:id' element={<UserDetails />} /> 

          <Route path='/blog/:id' element={<BlogViewActivity />} />

        </Routes>
      </SidebarWithHeader>

    </div>
    </ChakraProvider>
   
  );
}

export default App;
