//import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import TagLines from "./Components/Taglines/TagLines";
import NotFound from "./Components/NotFound/NotFound";
import Admin from "./Components/Admin/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DriverQuote from "./Components/DriverQuote/DriverQuote";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={TagLines} />
          <Route exact path="/quote" component={Form} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/quote/success/:myKey" component={DriverQuote} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <ToastContainer autoClose={2000} hideProgressBar />
    </React.Fragment>
  );
}

export default App;
