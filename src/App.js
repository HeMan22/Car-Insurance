//import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import TagLines from "./Components/Taglines/TagLines";
import NotFound from "./Components/NotFound/NotFound";
import Admin from "./Components/Admin/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={TagLines} />
          <Route path="/quote" component={Form} />
          <Route path="/admin" component={Admin} />
          {/* <Footer person="Himanshu Tripathi" year="2021" /> */}
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
