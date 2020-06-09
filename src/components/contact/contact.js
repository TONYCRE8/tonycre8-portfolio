import React, { useState } from "react"
import validate from "./validators"
import { Fade } from "react-reveal"

export default function Contact() {
 
  let form = React.createRef();

  const [success, setSuccess] = useState(false)

  const encode = (data) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    }

  const [pretendState, setFormValues] = useState({
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
    const netlifyForm = form.current;
    setLoading(true);
   
    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
          "form-name": netlifyForm.getAttribute("name"),
          ...pretendState
        }),
      // body: new URLSearchParams({name: name, mail: mail, subject: subject, message: message}).toString()
    });

    setSuccess(true)

    setTimeout(() => {
      setLoading(false);
      setSuccess(false)
      netlifyForm.reset()
    }, 5000)
  }
 
  const isValidMail = validate.mail(pretendState.mail)
  const isValidName = validate.name(pretendState.name)
  const isValidSubject = validate.subject(pretendState.subject)
  const isValidMessage = validate.message(pretendState.message)
 
  // this currently expects the mail to be a valid mail and every other variable to not be empty
  const isValidForm = isValidMail && isValidName && isValidSubject && isValidMessage
 
  return (
    <>
      <Fade left duration={500} opposite when={success}>
        <div className="success-message">
        <p className="tick">✓</p>
        <p>Thank you for getting in touch! We'll get back to you as soon as we can!</p>
        </div>
      </Fade>
      <form ref={form} name="contact" onSubmit={handleSubmit} method="POST" autoComplete="off" className="form" netlify data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
        </div>
        <fieldset disabled={loading}>
          <label for="name" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Jane Doe..."
            required
            className={pretendState.name.length > 2 && !isValidName ? "error" : ""}
          />
          <Fade left collapse when={pretendState.name.length > 2 && !isValidName}>
            <p className="error-message">Could you tell me your full name?</p>
          </Fade>
          <label name="mail" htmlFor="mail">Email</label>
          <input
            id="mail"
            name="mail"
            onChange={handleChange}
            type="text"
            placeholder="janedoe@doemail.com..."
            className={pretendState.mail.length > 2 && !isValidMail ? "error" : ""}
            required
          />
          <Fade left collapse when={pretendState.mail.length > 2 && !isValidMail}>
            <p className="error-message">Could you give me a full email address?</p>
          </Fade>
          <label for="subject" htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            onChange={handleChange}
            type="text"
            placeholder="Project idea..."
            className={pretendState.subject.length > 2 && !isValidSubject ? "error" : ""}
            required
          />
          <Fade left collapse when={pretendState.subject.length > 2 && !isValidSubject}>
            <p className="error-message">Please type a longer subject</p>
          </Fade>
          <label for="message" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="My project idea is..."
            className={pretendState.message.length > 2 && !isValidMessage ? "error" : ""}
            required
          />
          <p className={pretendState.message.length > 0 && !isValidMessage ? "character-limit error" : "character-limit"}>{pretendState.message.length}/150</p>
          <Fade left collapse when={pretendState.message.length > 2 && !isValidMessage}>
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
    </>
  )
}