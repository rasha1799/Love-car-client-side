import Home from "./pages/Home/Home/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";
import Header from "./pages/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Booking from "./pages/Booking/Booking";
import Explore from "./pages/Explore/Explore";
import DashBoardHome from "./pages/DashBoardHome/DashBoardHome";
import Footer from "./pages/Home/Home/Footer/Footer";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/dashBoardHome">
              <DashBoardHome />
            </PrivateRoute>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
