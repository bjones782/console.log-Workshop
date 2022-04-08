// What is console.log
console.log("this is being printing to my console")
console.error("warning")
console.clear()

let x = 1
let y = 2
let z = 3
console.log(x)
console.log(y)
console.log(z)
console.log({varx: x})
console.log({x, y, z})


// see my data
const myArr = ["banana", "orange", "strawberry", "kiwi"]
console.log(myArr[3])



// what's the output of an operation
const nums = [2, 6, 3, 5]
let numsMap = nums.map(num => console.log(num + 2))



// drill into an object
const myObj = {firstName: "Jason", lastName: "Mamoa"}
console.log(myObj.firstName)




// work with more complex data sets
const peopleArray = [{firstName: "Jason", lastName: "Mamoa"}, {firstName: "Daenerys", lastName: "Targaryen"}, {firstName: "Jon", lastName: "Snow"}]
console.log(peopleArray[0].firstName)
mappedArray = peopleArray.map(person => console.log(person.lastName))

// nested objects
let person = {
    "name":"Ankar",
    "age":27,
    "vehicles": {
       "car":"tesla model x",
       "bike":"ktm-duke",
       "plane":"lufthansa"
    }
 }
console.log(person.vehicles.bike)

// did I pass the right data into my function?
function doStuff(parameter1, parameter2) {
    console.log(parameter1, parameter2)
}
doStuff(3, 5)





// does this code block do what I think it does?
let divide = () => 2000/100
console.log(divide())

let square = x => x * x
console.log("unicorn", square(3))

let add = (a, b) => a - b
console.log(add)


// is the parameter/argument I sent ito this function what I think it is?
function clean(item) {
    console.log(`I just cleaned a ${item}`)
}


//   does this loop run the way I intended it to?
let nails = ["rusty nail", "bent nail", "shiny nail"]
  
for (i = 0; i < nails.length; i++) {
  clean(nails[i])
}

console.log('done!')

let planks = ["splintered plank", "straight plank", "bent plank"]

for (i = 0; i < planks.length; i++) {
  clean(planks[i])
}

console.log('done!')

