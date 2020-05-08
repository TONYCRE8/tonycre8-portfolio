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

export default {
  mail: validateMail,
  name: validateName,
}
