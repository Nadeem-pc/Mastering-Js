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


// Function Borrowing (call(), apply(), bind())

// call()
function printFullName () {
    console.log(this.firstName + " " + this.secondName)
}
const user = {
    firstName: 'Nadeem',
    secondName: 'Mohammed'
}
printFullName.call(user)


// apply()
function addInitial (initial) {
    console.log(this.name + " " + initial)
}
const user2 = {
    name: 'Nadeem Mohammed',
    age: 18
}
addInitial.apply(user2, ["Pc"])


// bind()
function getName () {
    console.log(this.name)
}
const getUsername = getName.bind(user2)
getUsername()


// Currying
function add (a) {
    return function(b) {
        return a + b
    }
}
console.log(add(1)(2))

function multiply (a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}
console.log(multiply(1)(2)(3))


// Callback hell
function first (cb) {
    setTimeout(() => {
        console.log("First function is working")
        cb()
    },1000)
}
function second (cb) {
    setTimeout(() => {
        console.log("Second function is working")
        cb()
    },2000)
}

first(() => {
    second(() => {
        console.log('Task completed')
    })
})


// Callback hell solving using promise()
function first () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('First task completed')
            resolve()
        }, 1000);
    })
}
function second () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second task completed')
            resolve()
        },1000)
    })
}

first()
.then(() => second())
.then(() => console.log("Task completed -using promise"))


// Callback hell solving using async-await
async function solve () {
    await first()
    await second()
    console.log('Task completed -using async await')
}
solve()


// Factory function
function carFactory (name) {
    return {
        car() {
            console.log(`The model is: ${name}`)
        }
    }
}
const bmw = carFactory('BMW M5')
bmw.car()


// Calculating sum of numbers in a nested object
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

function sumOfNested (obj) {
    let sum = 0
    
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            sum += obj[key]
        }else if(typeof obj[key] === 'object'){
            sum += sumOfNested(obj[key])
        }
    }

    return sum
}
console.log('Sum is: ', sumOfNested(obj))

// creating a file when promise resolving
const fs = require('fs')

const promise = new Promise((resolve, reject) => {
    resolve(fs.writeFile('sample.txt', 'Here is the data', (err) => {
        console.log('Page created successfully')
    }))
})

//timer qatn
let i = 0
const timer = setInterval(() => {
    console.log(i)
    i++
    if (i > 10){
        clearInterval(timer)
        i = 0
        console.log(i)
    }
},1000)


// generator fun for 5 
function * multiplesOfFive () {
    let i = 1
    while(true){
        yield i * 5
        i++
    }
}
let result = multiplesOfFive()
console.log(result.next().value)
console.log(result.next().value)


// sum of prime 
const isPrime = (n) => {
    if(n <= 1) return false
    for(let i = 2; i < n; i++){
        if(n % i === 0) return false
    }
    return true
}

const sumOfPrime = (arr) => {
    let sum = 0
    for(let num of arr){
        if(isPrime(num)){
            sum += num
        }
    }
    return sum
}
console.log(sumOfPrime([1,2,3,4,5,6]))


// second largest from an unsorted array
const secondLargest = (arr) => {
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargest([1,5,3,17,5,9]))


// unique elements in an array using HOFs
const arr = [1, 2, 3, 4, 5, 4, 5]

const frequency = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1
  return acc
}, {})

const unique = arr.filter(num => frequency[num] === 1)
console.log(unique)


// Remove duplicates from an array without using any inbuilt methods
for(let i = 0; i < arr.length; i++){
  for(let j = i + 1; j < arr.length; j++){
    if(arr[i] === arr[j]){
      for(let k = j; k < arr.length -1; k++){
        arr[k] = arr[k + 1]
      }
      arr.length --
      j--
    }
  }
}
console.log(arr)


// Reverse each word in a string
let str = 'hello world'
let result = ""
let word = ""

for(let i = 0; i <= str.length; i++){
  const char = str[i]
  if(char === " " || i === str.length){
    
    for(let j = word.length - 1; j >= 0; j--){
      result += word[j]
    }
    
    if(char === " ") result += " "
    word = ""
  }
  else{
    word += char
  }
}

console.log(result)


// hoc
import React from 'react'

const Hello = (Component) => {
    return function Enhanced(props) {
        return (
            <>
                <h1>hello</h1>
                <Component {...props} />
            </>
        )
    }
}

const Welcome = () => {
    return <h1>Welcome</h1>
}

const HelloWelcome = Hello(Welcome)

const app = () => {
  return (
    <HelloWelcome/>
  )
}

export default app


// component unmount notificaton
import React, { useEffect, useState } from 'react'


const App = () => {
    const [on, setOn] = useState(true)

    useEffect(() => {
        return(() => {
            alert('Are you sure')
        })
    },[on])

    return (
        <>
            {on && <Child1 />}
            <button onClick={() => setOn(false)}>Click</button>
        </>
    )
}
export default App

const Child1 = () => {
    return (
        <div>Hello iam child</div>
    )
}