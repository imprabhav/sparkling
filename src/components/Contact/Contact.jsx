import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const Contact = () => {
  const formRef = useRef();

  const toastOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_k3rx1j4",
        "template_i7tgtej",
        formRef.current,
        "GFie4fUsUBaD8xdUr"
      );
      toast.success("Mail sent successfully!", toastOptions);
    } catch (error) {
      toast.error("Unable to send mail!", toastOptions);
    }
  };
  return (
    <>
      <div className="contact">
        <h1 className="heading">Get in Touch</h1>
        <div className="contact_1">
          <div className="contact_1_text">
            <div className="contact_1_element">
              <h3>Phone Number</h3>
              <p>+91 9452582375</p>
            </div>
            <div className="contact_1_element">
              <h3>Email</h3>
              <p>sparklingstars892@gmail.com</p>
            </div>
            <div className="contact_1_element">
              <h3>Address</h3>
              <p>Govindpuram Ekta Nagar, Campwel Road, Lucknow</p>
            </div>
          </div>
          <div className="contact_form">
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Child's Name"
                name="cName"
                required
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="Gaurdian's Name"
                name="name"
                required
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="Gaurdian's Email"
                name="email"
                required
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="Gaurdian's Phone"
                name="phone"
                required
                autoComplete="off"
                pattern="[1-9]{1}[0-9]{9}"
              />
              <textarea
                rows={4}
                placeholder="Message"
                name="message"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>

        <div className="contact_2">
          <div className="contact_2_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.227450882646!2d80.8768570110467!3d26.86451376206281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff0069b386d7%3A0x213c0c0a270ac14e!2sSparkling%20stars%20kids%20school!5e0!3m2!1sen!2sin!4v1716014996811!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default Contact;
