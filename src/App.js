

import Navbar from "./components/navbar";
// import  Restaurant from "./components/Restaurant.js";
// import data from "./components/constant.json"
// import Search from "./components/search.js"
// import Rating from "./components/rating.js";
import Home from "./components/home";

function App() {
 
  return (
    <>
      <Navbar></Navbar>
      {/* 
      <Search data={data}></Search>
      <Rating data={data}></Rating>
      <Restaurant data={data}/> */}
      <Home />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
