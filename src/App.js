//import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import TagLines from "./Components/Taglines/TagLines";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TagLines />
      <div className="App">CAR INSURANCE</div>
      <Form />
      {/* <Footer person="Himanshu Tripathi" year="2021" /> */}
    </React.Fragment>
  );
}

export default App;
