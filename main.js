//question 1 answer:
const mapPrice = items.map(function (item) {
  return (item + item.price) / item.price.length
})

// const avgPrice = items.reduce(function (a, b) {
//   return (a + b.price)
// }) / items.price.length

// const avgPrice = mapPrice.reduce((item) {
//   return (item + mapPrice) / mapPrice.length
// })
document.getElementById("#answer1").innerHTML = avgPrice

console.log(avgPrice)

//question 2 answer:
// const arr2 = items.map(function (item) {
//   return item.price
// })
const arr = items.filter(function (item) {
  if (item.price >= 14 && item.price <= 18) {
    console.log(item.price)
    return item.price
  } else {
    return false
  }
})
const costBetweenAnswer = arr
  .map(function (item) {
    console.log(item)
    return `<li>${item.title}</li>`
  })
  .join(" ")
document.querySelector(`#answer2`).innerHTML = $(costBetweenAnswer)

//question 3 answer:

const gbp = items.filter(function (item) {
  if (item.currency_code === "GBP") {
    return true
  } else {
    return false
  }
})
const gbpAnswer = gbp.map(function (item) {
  return `${item.title}" , "${item.price}`
})
document.querySelector("answer3").innerHTML = `$(gpbAnswer)`
