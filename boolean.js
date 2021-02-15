let res1 = (true && false) || (false && true)
//  res1 =        false    ||        false     =    false
console.log(res1)

let res2 = 10 > 11 && 11 > 10
//  res2 =  false  &&   true      =    false
console.log(res2)

let res3 = (true || false) && true
//  res3 =      true       && true   =  true
console.log(res3)

let res4 = (!true && !false) || (!false && !false)
//  res4 =        false      ||         true    =  true
console.log(res4)

let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
//  res5 =          true       &&        false    =   false
console.log(res5)
let res6 = (!(20 >= 20) && 7 === 7) || true
//  res6 =     ( false  &&   true ) || true  =   true
console.log(res6)

let res7 = '1' === 1 && '2' == 2 && '3' === 3
//  res7 =    false  &&   false  &&    false  = false
console.log(res7)

let res8 = !res7
//  res8 = !false = true 
console.log(res8)

let res9 = !res8
//  res9 = !true = false
console.log(res9)

let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
//  res10 =       false    ||      true      ||      false     ||         false           =   true
console.log(res10)