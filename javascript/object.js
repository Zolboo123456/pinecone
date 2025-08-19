// const iPhone = {
//     company: "Apple",
//     model: "Iphone 15",
//     color: "Black",
//     cameraCount: 2,
//     takePicture: function() {console.log("Taking a picture.")}
// }

// iPhone.takePicture()
// console.log(iPhone.company)

// globalThis.testing = "Bob"


// const zolboo = {
//     name: "Zolboo",
//     age: 15,
//     hobby: "volleyball",
//     school: "high school",
//     printName: function(){ console.log(this.age) },
//     printHobby: function() { console.log(`${this.name} likes to play ${this.hobby}`)}
// }

// function printSomething() {
//     console.log(this.testing)
// }

// printSomething()


// console.log(zolboo.printName())
// console.log(zolboo.printHobby())

// zolboo.wakeup()
// console.log(zolboo.hobby)

// const ZolbooProperty = Object.keys(zolboo)
// console.log(`List of properties: ${ZolbooProperty}`)


// const ZolbooValues = Object.values(zolboo)
// console.log(`List of values: ${ZolbooValues}`)

// const ZolbooValues = Object.values(zolboo)
// console.log(`List of values: ${ZolbooValues}`)

// let person1 = {
//     firstname: "Naranbayar",
// }
// let person2 = {...person1};
// person2.firstname = "Bob"

// console.log(person1.firstname)
// console.log(person2.firstname)

// - - - - - - - -

const people = [
  {
    id: 1,
    name: "Alice",
    gender: "Female",
    age: 8,
    email: "alice@example.com",
    hobbies: ["reading", "hiking", "painting"],
    address: {
      city: "Seattle",
      zip: "98101"
    }
  },
  {
    id: 2,
    name: "Bob",
    gender: "Male",
    age: 35,
    email: "bob@example.com",
    hobbies: ["cycling", "gaming"],
    address: {
      city: "Austin",
      zip: "73301"
    }
  },
  {
    id: 3,
    name: "Charlie",
    gender: "Male",
    age: 22,
    email: "charlie@example.com",
    hobbies: ["music", "movies", "coding"],
    address: {
      city: "New York",
      zip: "10001"
    }
  }
];

const findEmail = (data) => {
    for (let i = 0; i = data.length; i++) {
        console.log(data[i])
    }
}

findEmail(people, )