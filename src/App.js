import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import {createContext, useEffect} from 'react';
import axios from "axios";

const MyContext=createContext();

function App() {

const [countryList,setCountryList]=useState([]);

useEffect(()=>{
  getCountry("https://countriesnow.space/api/v0.1/countries/");
},[]);

const getCountry=async(url)=>{
  const responsive = await axios.get(url).then((res)=>{
    setCountryList(res.data.data.country)
    console.log(res.data.data[0].country)
  })
}

const values={
  countryList

}

  return (
  <BrowserRouter>
  <MyContext.Provider value= {values}>
  <Header/>
  <Routes>
    <Route path="/" exact={true} element={<Home/>}/>
  </Routes>
  </MyContext.Provider>
  </BrowserRouter>
  );
}

export default App;
export {MyContext}
