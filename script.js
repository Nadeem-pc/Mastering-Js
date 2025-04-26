// Hoisting
console.log(greeting)
var greeting = 'Hello'


// Pass by reference
const car = {
    brand: 'Toyota',
    model: 'Land Cruiser'
}
const car2 = car
car.model = 'Corolla'
console.log('Original: ',car)
console.log('Inherited: ',car2)


// Pass by value (Spread Operator)
const person = {
    name: 'nadeem',
    age: 18
}
const person2 = {...person}
person2.name = 'Rahul'
console.log('Original: ',person)
console.log('Inherited: ',person2)


// Pass by value (Object.assign())
const bike = {
    brand: 'Bajaj',
    model: 'Dominar'
}
const bike2 = Object.assign({}, bike)
bike2.model = 'NS 200'
console.log('Orginal: ', bike)
console.log('Inherited: ', bike2)


// Array joining
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const newArr = arr1.concat(arr2)  // Using concat()
console.log(newArr)
const newArr2 = [...arr1, ...arr2]  // Using spread operator 
console.log(newArr2)
const newArr3 = [...arr1, 4]
console.log(newArr3)


// Destructuring
const array = ['Nadeem', 'Mohammed']
const [firstName, secondName] = array
console.log(firstName)

const object = {
    id: 1,
    name: "Nadeem"
}
const {id, name} = object
console.log(name)


// Rest Operator
const data = {
    name: 'Nadeem',
    age: 18,
    place: 'Malappuram'
}
const {age, ...rest} = data
console.log(rest);


// Array Methods
const employees = [
    {
        id: 100,
        name: 'Nadeem'
    },
    {
        id: 101,
        name: 'Razi'
    }
]

// forEach()
employees.forEach((value, index, array) => console.log(value))

// map()
const emp = employees.map((value) => value.name)
console.log(emp)

// filter()
const filteredArr = employees.filter((value) => value.id === 100)
console.log(filteredArr)

// reduce()
const even = [2,4,6,8]
const sum = even.reduce((acc, value) => value + acc, 0)
console.log(sum)

// find()
const me = employees.find((value) => value.name === 'Nadeem')
console.log(me)

// sort()
const randomArr = [56,2,1,6,90,3]
const asc = randomArr.sort((a, b) => a - b)
console.log(asc)
const desc = randomArr.sort((a, b) => b - a)
console.log(desc)

// flat()
const nestedArr = [1,3,[3,0],8,[4,9,2,3],0]
console.log(nestedArr.flat())