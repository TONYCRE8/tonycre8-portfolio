import React, { useState } from "react";
import validate from "./validators";
import {Slide} from 'react-reveal'

export default function Contact() {
  const [{ mail, name, subject, message }, setFormValues] = useState({
    mail: "",
    name: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  function handleChange({ target: { value, name } }) {
    setFormValues(previousValues => ({ ...previousValues, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    console.log({
      mail,
      name,
      subject,
      message
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    event.target.reset();
  }

  const isValidMail = validate.mail(mail);
  const isValidName = validate.name(name);

  // this currently expects the mail to be a valid mail and every other variable to not be empty
  const isValidForm = isValidMail && isValidName && subject && message;

  return (
    <form onSubmit={handleSubmit} autoComplete="nope" className="form">
      <fieldset disabled={loading}>
          <label>
            Name
          </label>
          <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Jane Doe..."
              required
            />
            {name.length > 2 && !isValidName && <Slide down><p className="error-message">Invalid name!</p></Slide>}
          <label>
            Email
          </label>
          <input
              name="mail"
              onChange={handleChange}
              type="text"
              placeholder="janedoe@doemail.com..."
              required
            />
            {mail.length > 2 && !isValidMail && <Slide down><p className="error-message">Invalid mail!</p></Slide>}
          <label>
            Subject
          </label>
          <input
              name="subject"
              onChange={handleChange}
              type="text"
              placeholder="Project idea..."
              required
            />
          <label>
            Message
          </label>
          <textarea
              name="message"
              onChange={handleChange}
              placeholder="My project idea is..."
              required
            />
        <button type="submit" disabled={!isValidForm} class="button" style={{marginTop: '15px'}}>
          { !isValidForm ? "Fill in the form" : loading ? "Loading..." : "Submit" }
        </button>
      </fieldset>
    </form>
  );
}