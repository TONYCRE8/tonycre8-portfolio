import React, { useState } from "react"
import validate from "./validators"
import { Fade } from "react-reveal"

export default function Contact() {

  const [{ mail, name, subject, message }, setFormValues] = useState({
    mail: "",
    name: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  function handleChange({ target: { value, name } }) {
    setFormValues(previousValues => ({ ...previousValues, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    
    await fetch('/', {
      method: 'POST',
      body: new URLSearchParams({name: name, mail: mail, subject: subject, message: message}).toString()
    });
  
    alert('thank you!');
  
    setLoading(false);
  }

  const isValidMail = validate.mail(mail)
  const isValidName = validate.name(name)
  const isValidSubject = validate.subject(subject)
  const isValidMessage = validate.message(message)

  // this currently expects the mail to be a valid mail and every other variable to not be empty
  const isValidForm = isValidMail && isValidName && isValidSubject && isValidMessage

  return (
    <form name="contact" onSubmit={handleSubmit} autoComplete="off" className="form" netlify data-netlify="true" netlify-honeypot="bot-field">
      <fieldset disabled={loading}>
        <input type="hidden" name="form-name" value="contact" />
        <label for="name" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Jane Doe..."
          required
          className={name.length > 2 && !isValidName ? "error" : ""}
        />
        <Fade left collapse when={name.length > 2 && !isValidName}>
          <p className="error-message">Could you tell me your full name?</p>
        </Fade>
        <label name="mail" htmlFor="mail">Email</label>
        <input
          id="mail"
          name="mail"
          onChange={handleChange}
          type="text"
          placeholder="janedoe@doemail.com..."
          className={mail.length > 2 && !isValidMail ? "error" : ""}
          required
        />
        <Fade left collapse when={mail.length > 2 && !isValidMail}>
          <p className="error-message">Could you give me a full email address?</p>
        </Fade>
        <label for="subject" htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          onChange={handleChange}
          type="text"
          placeholder="Project idea..."
          className={subject.length > 2 && !isValidSubject ? "error" : ""}
          required
        />
        <Fade left collapse when={subject.length > 2 && !isValidSubject}>
          <p className="error-message">Please type a longer subject</p>
        </Fade>
        <label for="message" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="My project idea is..."
          className={message.length > 2 && !isValidMessage ? "error" : ""}
          required
        />
        <p className={message.length > 0 && !isValidMessage ? "character-limit error" : "character-limit"}>{message.length}/150</p>
        <Fade left collapse when={message.length > 2 && !isValidMessage}>
          <p className="error-message">Please make sure the message is more than 150 characters</p>
        </Fade>
        <button
          type="submit"
          disabled={!isValidForm}
          className={!isValidForm ? "disabled button" : loading ? "disabled button" : "button"}
          style={{ marginTop: "15px" }}
        >
          {!isValidForm
            ? "Fill out the form"
            : loading
            ? "Loading..."
            : "Submit"}
        </button>
      </fieldset>
    </form>
  )
}
