// How to dress year round on your Road bike !

let isRainy = false
let isWindy = false
let temperature = 19
let clothes = ''

if (isWindy && isRainy) {
 clothes += 'Waterproof jacket, '  
} else if (isWindy) {
  clothes += 'Wind jacket, '
} else if (isRainy){
  clothes += 'Waterproof jacket, '
} else {
  clothes += ''
}

if (temperature < 10) {
  clothes += 'Base layer, bib thights, long sleeves jersey, gilet, full fingers gloves, overshoes.'
} else if (temperature >= 10 && temperature <= 18) {
  clothes += 'Base layer,bib shorts, short sleeves jersey, arm warmers, leg warmers, mitts.'
} else {
  clothes += 'Base layer, bib shorts, short sleeves jersey, mitts.'
}
console.log(`You should wear: ${clothes}`)

