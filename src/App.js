import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AdminPage from "./pages/admin/AdminPage";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Welcome from "./pages/Welcome";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <ProtectedRoute
          path="/dashboard"
          component={DashboardPage}
        ></ProtectedRoute>
        <ProtectedRoute path="/admin" component={AdminPage}></ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
