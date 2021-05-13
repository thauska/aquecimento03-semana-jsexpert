const dateRegex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

const match = dateRegex.exec('2021-05-12')
console.log({ match })

const { groups } = match
const { year, month, day } = groups
console.log({
    day, month, year
})
