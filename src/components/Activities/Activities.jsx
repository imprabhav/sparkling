import { activityData } from "../../constants";
import "./Activities.scss";

const Activities = () => {
  return (
    <>
      <h1 className="heading">School Activities</h1>
      <p className="sub_heading">
        Providing diverse opportunities for student engagement and enrichment.
        <br />
        Fostering creativity, teamwork, and personal growth.
      </p>
      <div className="activities">
        {activityData.map((a) => (
          <div className="activity_card" key={a.key}>
            <div className="activity_image">
              <img src={a.image} alt="" />
            </div>

            <div className="activity_content">
              <h2>{a.activity}</h2>
              <div className="activity_info">
                <div id="activity_age">
                  <hr />
                  <h3>Age</h3>
                  <p>{a.age}</p>
                </div>
                <div id="activity_time">
                  <hr />
                  <h3>Time</h3>
                  <p>{a.time}</p>
                </div>
                <div id="activity_capacity">
                  <hr />
                  <h3>Capacity</h3>
                  <p>{a.capacity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
