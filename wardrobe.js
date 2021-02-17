// How to dress year round on your Road bike !

let isRainy = false
let isWindy = true
let temperature = 8
let clothes = 'Base layer, '

if (isWindy && isRainy) {
 clothes += 'Waterproof jacket, '  
} else if (isWindy && temperature > 18) {
  clothes += ''
} else if (isWindy) {
  clothes += 'Wind jacket, '
} else if (isRainy){
  clothes += 'Waterproof jacket, '
} else {
  clothes += ''
}

if (temperature < 10) {
  clothes += 'bib thights, long sleeves jersey, gilet, full fingers gloves, overshoes.'
} else if (temperature >= 10 && temperature <= 18) {
  clothes += 'bib shorts, short sleeves jersey, arm warmers, leg warmers, mitts.'
} else {
  clothes += 'bib shorts, short sleeves jersey, mitts.'
}
console.log(`You should wear: ${clothes}`)

