import React, { useRef } from "react";
import "../../CSS/Tagline.css";
import { useHistory } from "react-router-dom";

const TagLines = () => {
  let history = useHistory();
  let pic_slide1 = useRef();
  let pic_slide2 = useRef(null);
  let pic_slide3 = useRef(null);

  var picSlideIndex = 1;
  let i = 0;

  // Next/previous controls
  let plusSlides = (e) => {
    showSlides((picSlideIndex += e));
    console.log("next button pressed");
  };

  var showSlides = (n) => {
    if (n > 3) {
      n = 1;
      picSlideIndex = 1;
    }
    console.log("next value : ", n);

    console.log("length ", i, " : ", pic_slide1.current.length);

    if (n < 1) {
      n = 3;
      picSlideIndex = 3;
    }
    if (n === 1) {
      pic_slide1.current.style.display = "block";
      pic_slide2.current.style.display = "none";
      pic_slide3.current.style.display = "none";
    }
    if (n === 2) {
      pic_slide2.current.style.display = "block";
      pic_slide1.current.style.display = "none";
      pic_slide3.current.style.display = "none";
    }

    if (n === 3) {
      pic_slide3.current.style.display = "block";
      pic_slide2.current.style.display = "none";
      pic_slide1.current.style.display = "none";
    }
  };

  return (
    <React.Fragment>
      {/* SlideShow Container */}
      <div className="pic-slideshow-container">
        <div
          className="picSlides img-fade"
          style={{ display: "block" }}
          ref={pic_slide1}
        >
          <img src="/assets/family.jpg"></img>
          <div className="tagLine">
            <h2>Act Confidently With Our Insurance Policy</h2>
            <h4>We can insure you from any kind of trouble</h4>

            <div className="get_quote">
              <p onClick={() => history.push("/quote")}> Get Quote </p>
            </div>
          </div>
        </div>

        <div className="picSlides img-fade" ref={pic_slide2}>
          <img src={process.env.PUBLIC_URL + "/assets/deal.jpg"}></img>
          <div className="tagLine">
            <h2>Keep Your Car Safe With Our Services</h2>
            <h4>We provide wide range of Car Insurance services</h4>

            <div className="get_quote">
              <p onClick={() => history.push("/quote")}> Get Quote</p>
            </div>
          </div>
        </div>

        <div className="picSlides img-fade" ref={pic_slide3}>
          <img src={process.env.PUBLIC_URL + "/assets/relax.jpg"}></img>
          <div className="tagLine">
            <h2>Applying For Car Insurance Just Got Easier</h2>
            <h4>You can apply for car insurance online in just few minutes</h4>

            <div className="get_quote">
              <p onClick={() => history.push("/quote")}> Get Quote</p>
            </div>
          </div>
        </div>

        {/* -- Next and previous buttons */}
        <a className="prevArrow" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="nextArrow" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </React.Fragment>
  );
};

export default TagLines;
