import React from "react";
import "./contact.css";
import Back from "../common/back/Back";

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10143.216901898017!2d86.085358939555!3d26.188411152669065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1662489214123!5m2!1sen!2sin";
  return (
    <>
      <Back title="Contact Us Now" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
              blanditiis ratione inventore.
            </p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>Narayanpur, Sakri, Darbhanga, Bihar - India</p>
              </div>
              <div className="box">
                <h4>Email:</h4>
                <p>asifimam999@gmail.com</p>
              </div>
              <div className="box">
                <h4>Phone:</h4>
                <p>+123 456 7890</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="10">
                Write your message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>Facebook Twitter Instagram Dribble</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
