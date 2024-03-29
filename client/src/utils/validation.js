/* eslint-disable no-useless-escape */
const validateObject = {
  forename: {
    regex: /^[a-zA-Z]*$/,
    error: false,
    message: '',
  },
  surname: {
    regex: /^[a-zA-Z]*$/,
    error: false,
    message: '',
  },
  username: {
    regex: /^[-\w\.\$@\*\!]{1,30}$/,
    error: false,
    message: '',
  },
  password: {
    // regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}\S*$/,
    regex: /^[a-zA-Z0-9]*\S$/,
    error: false,
    message: '',
  },
  email: {
    regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: false,
    message: '',
  },
}

const validateField = (validation, input, key) => {
  const isValid = validation.regex.test(input)
  return {
    error: !isValid,
    message: !isValid ? `Invalid ${key}` : '',
  }
}

const validation = input => {
  const validationObj = { ...validateObject }
  Object.keys(validationObj).forEach(key => {
    validationObj[key] = validateField(validationObj[key], input[key], key)
  })
  return validationObj
}

const isFormValid = validationObj => {
  // eslint-disable-next-line consistent-return
  Object.keys(validationObj).forEach(key => {
    if (validationObj[key].error) {
      return false
    }
  })
  return true
}

export default validation
export { isFormValid }
