const text = "N,.ã_o)d-á"
const regex = /([^A-zÀ-ÿ]|_)/gm
const result = text.replace(regex, '')
console.log({ result })