/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
const Age = {
  calculateFullAge: (birthDate, targetDate) => {
    const ageObj = {}
    const _birthDate = new Date(birthDate)
    const yearTarget = targetDate.getYear()
    const monthTarget = targetDate.getMonth()
    const dateTarget = targetDate.getDate()
    const yearDob = _birthDate.getYear()
    const monthDob = _birthDate.getMonth()
    const dateDob = _birthDate.getDate()

    let yearAge
    let monthAge
    let dateAge
    yearAge = yearTarget - yearDob
    if (monthTarget >= monthDob) {
      monthAge = monthTarget - monthDob
    } else {
      yearAge--
      monthAge = 12 + monthTarget - monthDob
    }
    if (dateTarget >= dateDob) {
      dateAge = dateTarget - dateDob
    } else {
      monthAge--
      dateAge = 31 + dateTarget - dateDob
      if (monthAge < 0) {
        monthAge = 11
        yearAge--
      }
    }
    ageObj.years = yearAge
    ageObj.months = monthAge
    ageObj.days = dateAge

    return Age.returnAgeString(ageObj)
  },
  getAge: (birthDate, targetDate = undefined) => {
    const target = targetDate ? new Date(targetDate) : new Date()
    return Age.calculateFullAge(birthDate, target)
  },
  returnAgeString: ageObj => {
    const years = ageObj.years > 0 ? `${ageObj.years}y` : undefined
    const months = ageObj.months > 0 ? `${ageObj.months}m` : undefined
    const days = ageObj.days > 0 ? `${ageObj.days}d` : undefined
    return !years && !months && !days
      ? 'Sushi Go age: joined today!'
      : `Sushi Go age: ${years || ''}${months || ''}${days || ''}`
  },
}

export { Age }
