import React from 'react';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Switch, Redirect} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <>
        <Switch>
            <Route exact path="/home" component={MainPage}/>
            <Redirect to="/home" />
        </Switch>
    </>
  );
}

export default App;
