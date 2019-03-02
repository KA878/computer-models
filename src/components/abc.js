const data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }

const data2 = Object.keys(data)
const data3 = Object.values(data)
const exa = Object.entries(data)

// exa.map(x => console.log(x))
console.log(exa[0][1].year)

// console.log(data2)
// console.log(data3)
// console.log(exa)