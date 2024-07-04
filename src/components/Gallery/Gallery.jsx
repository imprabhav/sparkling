import "./Gallery.scss";
import { galleryData } from "../../constants";
const Gallery = () => {
  return (
    <>
      <h2 className="heading">Gallery</h2>
      <p className="sub_heading">
        Showcasing memorable moments and achievements of our students. <br />A
        visual journey through our vibrant school community.
      </p>
      <div className="gallery">
        <div className="gallery_1">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/i--L28XKdlc?si=NCUah2WvL9KD1ITk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="gallery_2">
          {galleryData.map((i) => (
            <div className="gallery_image" key={i.id}>
              <img src={i.img} alt="Gallery Image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
