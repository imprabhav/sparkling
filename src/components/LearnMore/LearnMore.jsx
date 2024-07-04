import "./LearnMore.scss";
import {
  learnMore1,
  learnMore2,
  learnMore3,
  director,
} from "../../assets/index.js";
const LearnMore = () => {
  return (
    <>
      <div className="learn_more">
        <div className="learm_more_img_container">
          <div className="learm_more_img large_img">
            <img src={learnMore1} alt="img" />
          </div>
          <div className="small_images">
            <div className="learm_more_img">
              <img src={learnMore2} alt="img" />
            </div>
            <div className="learm_more_img">
              <img src={learnMore3} alt="img" />
            </div>
          </div>
        </div>
        <div className="learm_more_content">
          <h2>Learn More About Our Work And Our Cultural Activities</h2>
          <p>
            At Sparkling Stars, we foster holistic growth, nurturing bright
            minds, compassionate hearts, and confident spirits. Join us in a
            tradition of excellence, where every star shines with incredible
            radiance.
          </p>
          <p>
            At Sparkling Stars School, we believe in excellence as an ongoing
            journey driven by passion and dedication. Through nurturing young
            minds, we aim to illuminate the path to success. Welcome to a place
            where education is an art, teaching is a passion, and every child is
            a shining star.
          </p>
          <div className="learn_more_btns">
            <a
              href="Sparkling Stars.pdf"
              download={"Sparkling Stars.pdf"}
              className="btn"
            >
              Read More
            </a>
            <div className="learn_more_btns_info">
              <img src={director} alt="Director Image" />
              <div>
                <h3>Mrs Anita Soni</h3>
                <p>Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
