//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let counter1=0;
//let secondCounter=0;
//setInterval(() => {
//    secondCounter= secondCounter++;
   // let dividir=Array.from( String(secondCounter), Number ).reverse();
    //console.log(
    //    (dividir[2]==undefined ? 0 :dividir[2]),
    //    (dividir[1]==undefined ? 0 :dividir[1]),
    //    (dividir[0]==undefined ? 0 :dividir[0]),
    //)
  //  console.log(secondCounter);
   // ReactDOM.render(<Home seconds= {secondCounter} />, document.querySelector("#app"));  
 //  setInterval(() => {
    ReactDOM.render(<Home/>, document.querySelector("#app")); 
//}, 10000);
//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
