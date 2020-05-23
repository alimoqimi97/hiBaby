import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import BillBoard from "./components/BillBoard/BillBoard.js";
import ToolBar from "./components/ToolBar/ToolBar.js";
// import Vitrin from "./components/Vitrin/Vitrin.js";
// import Introduction from "./components/Introduction/Introduction.js";
// import Advert from "./components/Advert/Advert.js";
// import LoginPage from "./components/LoginPage/LoginPage.js";
// import Footer from "rc-footer";
import "rc-footer/assets/index.css";
// import mario from "./components/Advert/images/mario.png";
import { BrowserRouter as Router  , Switch , Route , Link } from "react-router-dom";
// import Home from "./components/Home/Home.js";
import LoginPage from "./components/LoginPage/LoginPage.js";

// function importAll(r){
//   return r.keys().map(r);
// }
// 
// const imgs = importAll(require.context("./products-images",false,/\.(png|jpe?g|svg)$/));




function App(){
  return (
    <ToolBar />
  );
}

// function App() {
//
//     debugger;
//
//     return (
//       <Router>
//           <div>
//               <nav>
//                   <ul>
//                     <li>
//                         <Link to="/">خانه</Link>
//                     </li>
//                     <li>
//                         <Link to="/login">ورود</Link>
//                     </li>
//                   </ul>
//               </nav>
//           </div>
//
//           <Switch>
//               <Route path="/login"><LoginPage /></Route>
//               <Route path="/" ><Home /></Route>
//           </Switch>
//       </Router>
//     );
// }






export default App;
