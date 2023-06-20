import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import emailIllustration from "../../assets/contact-img.png";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [state, handleSubmit] = useForm("xjvdnpgw");
  const [lengthInput, setLengthInput] = useState({
    email: 0,
    message: 0,
  });

  const navigate = useNavigate()

  if (state.succeeded) {
    Swal.fire({
      icon: "success",
      title: "Message sent!",
      showConfirmButton: true,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/`);
      }});
  }

  const handleChange = (e) => {
    setLengthInput({
      ...lengthInput,
      [e.target.name]: e.target.value.length,
    });
  };

  return (
    <section className="contact-section">
      <div className="title-contact-container">
        <h1 className="title-contact">Contact with me!</h1>
        <img
          className="title-img"
          src={emailIllustration}
          alt="email-icon"
        ></img>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="group-one">
          <input
            onChange={handleChange}
            id="email"
            type="email"
            name="email"
            className={
              lengthInput.email <= 0 ? "email-input" : "email-input-active"
            }
          />
          <label htmlFor="email" className={"label-input"}>
            Email Address
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="group-two">
          <textarea
            onChange={handleChange}
            id="message"
            name="message"
            className={
              lengthInput.message <= 0
                ? "message-input"
                : "message-input-active"
            }
          />
          <label className="label-message" htmlFor="message">
            Message
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button className="submit-button" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}
