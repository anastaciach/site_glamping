// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '../../public/vite.svg'

import "./App.css";
import Header from "../components/layout/Header/Header";
import Slider from "../components/ui/Slider/Slider"
import BookingForm from '../components/layout/BookingForm/BookingForm';
import FeaturedListings from "../components/layout/Featured-listings/FeaturedListings";
import Footer from "../components/layout/Footer/Footer";
import FeedbackForm from "../components/layout/Main/Main";
import Rental from "../components/layout/Rental/Rental"
// import { SayHello } from "../components/layout/Main/Main";
// import { Person } from "../components/layout/Main/Main";
import React from "react";
import "./App.css";

 

export default function App() {
  
  return (
    <><Header/>
    <Slider/>
    <BookingForm></BookingForm>
    <FeaturedListings></FeaturedListings>
    <Rental></Rental>
    </>
  );
}
function ToolBar({onPlayMovie,onUploadImage}){
return(<div>
  <button onClick={onPlayMovie}>Play Movie</button>
  <button onClick={onUploadImage}>Upload Image</button>
</div>)
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header/>
//     <SayHello></SayHello>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <Main/>
//       <Footer/>
//     </>
//   )
// }
