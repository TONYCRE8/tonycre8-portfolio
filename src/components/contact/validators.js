function validateName(maybeName) {
  return maybeName && maybeName.length > 5
}

function validateMail(maybeMail) {
  return (
    // may not be an empty string or undefined/null
    maybeMail &&
    // must be at least of length 6
    maybeMail.length > 5 &&
    // and match some criteria
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      maybeMail
    )
  )
}

function validateSubject(maybeSubject) {
  return maybeSubject && maybeSubject.length > 5
}

function validateMessage(maybeMessage) {
  return maybeMessage && maybeMessage.length > 150
}

export default {
  mail: validateMail,
  name: validateName,
  subject: validateSubject,
  message: validateMessage,
}
