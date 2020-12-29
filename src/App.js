import { useState, useEffect } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from "./pages.js";
import MyRoutes from "./MyRoutes.js";
import Secret from "./Secret.js";

function App() {

  return (
    <div>
      <Secret authorized="false"/>
    </div>
  );
}

export default App;
