import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { actions, originals } from "./Urls";


function App() {

return (
<div className="app">
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title="NETFLIX ORIGINALS"/>
  <RowPost url={actions} title='ACTIONS' isSmall/>
  <RowPost url={actions} title='ACTIONS' isSmall/>

  ,
</div>
  );
}

export default App;
