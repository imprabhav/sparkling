import { reviewData } from "../../constants";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <>
      <h2 className="heading">What Parents Say</h2>
      <p className="sub_heading">
        Hear firsthand experiences from our supportive school community. <br />
        Insights and testimonials from parents about their child&apos;s
        education.
      </p>

      <div className="review">
        <swiper-container
          slidesPerView={1}
          loop={true}
          autoplay={{ disableOnInteraction: true }}
          speed={1000}
        >
          {reviewData.map((r) => (
            <swiper-slide key={r.id}>
              <div className="review_slide">
                <p id="review_text">{r.review}</p>
                <div className="review_content">
                  <div className="review_img">
                    <img src={r.img} alt="Parent" />
                  </div>
                  <div className="review_text">
                    <div>
                      <h3>{r.name}</h3>
                      <p>{r.role}</p>
                    </div>
                    <svg
                      fill="#000000"
                      height="800px"
                      width="800px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 198 198"
                    >
                      <g>
                        <path
                          d="M0,92.905h48.024c-0.821,35-10.748,38.973-23.216,40.107L20,133.608v38.486l5.542-0.297
		c16.281-0.916,34.281-3.851,46.29-18.676C82.359,140.125,87,118.893,87,86.3V25.905H0V92.905z"
                        />
                        <path
                          d="M111,25.905v67h47.383c-0.821,35-10.427,38.973-22.895,40.107L131,133.608v38.486l5.222-0.297
		c16.281-0.916,34.442-3.851,46.451-18.676C193.199,140.125,198,118.893,198,86.3V25.905H111z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </>
  );
};

export default Reviews;
