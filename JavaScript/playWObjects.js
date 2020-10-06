var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

//print/log John's age
console.log("John's age is: " + users[1].age);
console.log("");
//print/log the name of the first object;
console.log("The first user's name is: " + users[0].name);
console.log("");
//print/log the name and age of each user using a for loop;
for (i = 0; i < users.length; i++) {
    console.log(users[i].name + " - " + users[i].age);
}