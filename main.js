//question 1 answer:
//attempts at question 1
//ask yourself, why is .map returning nan, but filter is working?
// .map had issue returning because I was passing it as a reference instead of the value grabbed by the previous function.
//ie passing by ref (.map( function (item) {return})) instead of by value ((item) => {return__}))
//maybe try .reduce?
// const mapPrice = items.map(
//   (item) => (item = (item.items.price.value + item.value) / item.length)
// )

// const avgPrice = items.reduce(function (a, b) {
//   return (a + b.price)
// }) / items.price.length

// const avgPrice = mapPrice.reduce((item) {
//   avgPrice = totPrice + obj.price(grabs current objects key value)
//   return avgPrice
// })

//**answered */
const mapPrice = items
  .filter((obj) => {
    console.log(obj.price)
    return obj.price
  })
  .reduce(function (avgPrice, obj, totPrice) {
    avgPrice = totPrice + obj.price
    return avgPrice
  }, 0)

console.log(mapPrice)

document.querySelector("#answer1").innerHTML = `$${mapPrice}0`

//question 2 answer:
// costBetween is correctly grabbing the values of each objects key of price.
// map, however is again not working.
//again, maybe try reduce instead?
//ended up only needing filter, but the ruturning value is stuck as a string saying object for the five
//returned items.
//worked issue out by using .map to create a new arr with the values of the title key,
// then turned the results into a string of listed items using the `<ul></ul>` dom and .join("")(?not sure if dom is the correct term for the action?)
//**answered */
const costBetween = items
  .filter(function (item) {
    if (item.price >= 14 && item.price <= 18) {
      console.log(item.title)
      return item
    }
  })
  .map((item) => {
    console.log(item.title)
    return `<ul>${item.title}</ul>`
  })
  .join("")
document.querySelector("#answer2").innerHTML = `${costBetween}`

//question 3 answer:
//stated that the items I would need would have a .currency_code of GBP
// and all others were ignored. Then mapped the recieved item, and put it's title key, and it's price key into
// a new array with  .map. I aslo added the styling to make the price look pretty
// finally returning the value I needed to the id of answer3 with .innerHTML
//**answered */
const gbp = items
  .filter(function (item) {
    if (item.currency_code === "GBP") {
      return item
    }
  })
  .map((item) => {
    console.log(item)
    return `${item.title} , $${item.price}.00`
  })
document.querySelector("#answer3").innerHTML = `${gbp}`

//question 4
//Approaching this question, I believe I will need to:
// filter for items made of "wood"(ask yourself: would forEach work here as well?)
//After filtering through the items, I need to map the supplied items into a new, listed array.
//Did not work at first, but I set my .filter if statment to find out if .includes() was true,
//and was returned the right items through it's return statement.
//So happy I'm getting this. Pat on the back to you....Alright that's enough, back to work.
//**answered */
const oakStrong = items
  .filter(function (item) {
    if (item.materials.includes("wood") == true) {
      return item
    }
  })
  .map((item) => {
    console.log(item)
    return `<ul>-${item.title}</ul>`
  })
  .join("")
console.log(oakStrong)
document.querySelector("#answer4").innerHTML = `${oakStrong}`

//question 5
//I will search items using .filter to find the items with 8 or more materials.
//An if statement based on x <= item.materials.length might take of that.
//the problem should most likely use .map to be able to return the items filtered.
//(Problem might possibly require a for each in front of everything as well, to help with filtering)
//Tried making a global scoped function to call inside of for each, but realized I could just use the action of that function inside
//of .forEach, by setting it to be a function that takes a function. (kind of like nesting I believe.)
//tried forEach using the above method, but ran into issues trying to use .filter to pick up the passed items that equalled true.
//using filter, and then a for loop allowed me to first get into .items, then to target keys on each item passed from there with the for loop,
//then building a new array to allow .map to function correctly, then returned.

const whatsITB = items
  .filter(function (item) {
    for (let i = 0; i < item.materials.length; i++) {
      theseITB = []
      if (item.materials.length >= 8) {
        return theseITB
      }
    }
  })
  .map((item) => {
    return `<ul>-Name of item: ${item.title}</ul>
    <ul>-number of items: ${item.materials.length}</ul>
    <ul>-$${item.price}.00</ul>`
  })
  .join("")
document.querySelector("#answer5").innerHTML = `${whatsITB}`
console.log(whatsITB)
//question 6
//I am going to use .filter to find the value of who_made in each item, and then using .map to make a new array of those that say "i_did".
//I don't see any blockers heading in this time.
//I figured that using filter
//
//
//
//
//

const whoDonit = items
  .filter(function (item) {
    if (item.who_did === "i_did") {
      return item[i]
    }
  })
  .map((item) => {
    return `${item}`
  })
  .join("")
document.querySelector("#answer6").innerHTML = `${whoDonit}`
console.log(whoDonit)
