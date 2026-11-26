const queue = ["AbdulMaleek", "Haseenat", "Halimot", "Simi"]

// console.log(names[2])
// console.log(names.length)
// console.log(names.at)

queue.push("Bushra")

const last = queue.pop()
console.log(last)
//Prints out Bushra

//Unshift adds to the beginning, push adds to the end

const arrUsers = [
    {name: "Emeka", age: 25, active: true},
    {name: 'Ada', age: 19, active: false},
    {name: 'Chidi', age: 32, active: true}
]

//The map function is used to create a new array of the exact same length by applying a function to each element
// .map() - Transform every item into a new array

// const userNames = arrUsers.map(bushra => bushra.name)

const userNames = ["Adebayo", "Ademola", "Adedeji"]

// .filter() - keeps only items that pass a condition
const newUserNames = userNames.filter(y => y.active === true)
console.log(newUserNames)
