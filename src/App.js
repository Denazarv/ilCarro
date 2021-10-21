import React from 'react';
import './App.css';
import './css/reset.css';
import './css/style.css';
import {Route} from "react-router-dom";
import HomePage from "./сomponents/HomePage/HomePage";
import BaseLayout from "./сomponents/common/BasicLayout/BasicLayout";
import Search_page from "./сomponents/Search_page/Search_page";
import Login from "./сomponents/Login/Login";
import LetTheCarWork from "./сomponents/LetTheCarWork/LetTheCarWork";
import Registration from "./сomponents/Registration/Registration";

function App() {
  return (

    <BaseLayout>
      <Route path="/home" render={()=> <HomePage/>}/>
      <Route path="/search" render={()=> <Search_page/>}/>
      <Route path="/car" render={()=> <LetTheCarWork/>}/>
      <Route path="/terms"/>
      <Route path="/registration" render={()=> <Registration/>}/>
      <Route path="/login" render={()=> <Login/>}/>
    </BaseLayout>
  );
}


export default App;



