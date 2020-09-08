//question 1 answer:
//const arr = items.map(function (item) {
//  return item.price
//})
//const avgPrice = arr.reduce((a, b) => a + b) / arr.length
//document.querySelector(`#answer1`).innerHTML = `The way to find average price is ${avgPrice}`

//console.log(avgPrice)

//question 2 answer:
//const arr = items.map(function (item) {
//  return item.price
//})
//const arr = items.filter(function (item) {
//  if (item.price >= 14 && item.price <= 18) {
//    return true
//  } else {
//    return false
//  }
//})
//const costBetweenAnswer = arr.map(function(item) {
//  return `<li>${item.title}</li>`
//}).join(' ')
//document.querySelector(`#answer2`).innerHTML = `$(costBetweenAnswer)`

//question 3 answer:

//const gbp = items.filter(function (item) {
//  if (item.currency_code === "GBP") {
//    return true
//  } else {
//    return false
//  }
//})
//const gbpAnswer = gbp.map(function (item) {
//  return `${item.title}" , "${item.price}`
//})
//document.querySelector("answer3").innerHTML = `$(gpbAnswer)`
