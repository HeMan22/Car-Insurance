import React from "react";
import "../../CSS/Tagline.css";
import { useHistory } from "react-router-dom";

const TagLines = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      {/* SlideShow Container */}
      <div className="pic-slideshow-container">
        <div className="picSlides img-fade">
          <img src={process.env.PUBLIC_URL + "/assets/family.jpg"}></img>
          <div className="tagLine">
            <h2>Act Confidently With Our Insurance Policy</h2>
            <h4>We can insure you from any kind of trouble</h4>

            <div className="home_get_quote">
              <p onClick={() => history.push("/quote")}> Get Quote ...</p>
            </div>
          </div>
        </div>

        <div className="picSlides img-fade">
          <img src={process.env.PUBLIC_URL + "/assets/deal.jpg"}></img>
          <div className="tagLine">
            <h2>Keep Your Car Safe With Our Services</h2>
            <h4>We provide wide range of Car Insurance services</h4>

            <div className="home_get_quote">
              <p onClick={() => history.push("/quote")}> Get Quote ...</p>
            </div>
          </div>
        </div>

        <div className="picSlides img-fade">
          <img src={process.env.PUBLIC_URL + "/assets/relax.jpg"}></img>
          <div className="tagLine">
            <h2>Applying For Car Insurance Just Got Easier</h2>
            <h4>You can apply for car insurance online in just few minutes</h4>

            <div className="home_get_quote">
              <p onClick={() => history.push("/quote")}> Get Quote ...</p>
            </div>
          </div>
        </div>

        {/* -- Next and previous buttons */}
        {/* <a class="prev" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a class="next" onclick="plusSlides(1)">
          &#10095;
        </a> */}
      </div>
      <br />
      {/* -- The dots/circles -- */}
      {/* <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div> */}
    </React.Fragment>
  );
};

export default TagLines;
