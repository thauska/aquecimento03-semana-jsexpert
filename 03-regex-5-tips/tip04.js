const heroes = `NickName: Chapolin, Power: Velocidade
NickName: Batman, Power: Money
`

const exp = /(NickName):\s(?<nickname>\w+),\sPower:\s(?<power>\w*)/gm

const finalString = heroes.replace(exp, (substring, _, nickname, power, ...args) => {
    return `${nickname} ${power}`
})

console.log(finalString)

const finalStringOneLine = heroes.replace(exp, `$<nickname> $<power>`)
console.log(finalStringOneLine)