import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";

const Contact = () => {
  const [viewport, setViewport] = useState({
    latitude: 30.4213,
    longitude: -87.2169,
    zoom: 10,
  });

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_n4mkhz9",
  //       "template_ugoztxr",
  //       e.target,
  //       "user_vYmDSd9PwIuRXUQEDjYwN"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   e.target.reset();
  // }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}
        <div>
      <iframe title="Contact Me Form" src="https://docs.google.com/forms/d/e/1FAIpQLSefn0vaC6o1qMDw2uHJhwXKjahe9KyKjoX2RY_sqNgQQFR-hA/viewform?embedded=true" width="640" height="709" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
        {/* <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li> */}
                {/* END FIRST NAME */}

                {/* <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li> */}
                {/* END EMAIL */}

                {/* <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li> */}
                {/* END SUBJECT MESSAGE */}
              {/* </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div> */}
            {/* END SUBMIT BUTTON */}
          {/* </form> */}
          {/* END FORM */}
        {/* </div> */}
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
