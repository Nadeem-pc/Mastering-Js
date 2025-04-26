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