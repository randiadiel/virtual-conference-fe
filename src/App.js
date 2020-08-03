import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import TextBox from "./components/TextBox/TextBox";
import DashboardPage from "./pages/dashboard/DashboardPage";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TextBox}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route path="/admin" component={DashboardPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
