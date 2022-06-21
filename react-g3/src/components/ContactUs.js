import React from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'

/* service_yiy8djs */

function ContactUs(props) {
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire(
      'Good job!',
      'Message send!',
      'success'
    )

    emailjs
      .sendForm(
        "service_l6fjgve",
        "template_hnpjrku",
        e.target,
        "user_sInjukE0Q5T7wihXXnw3m"
      )
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container contact-us">
      <div>
        <h1 className="text-center">Contact Us</h1>
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ContactUs;


/* https://www.emailjs.com/

 Se hizo una instalacion con npm i emailjs 
*/