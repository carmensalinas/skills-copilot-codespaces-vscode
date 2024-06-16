function skillsMember() {
  var member = {
    name: "John",
    age: 20,
    skills: ["JavaScript", "React", "Node"],
  };

  // Accessing object properties
  console.log(member.name); // John
  console.log(member.age); // 20
  console.log(member.skills); // ["JavaScript", "React", "Node"]

  // Accessing object properties using dot notation
  console.log(member.name); // John
  console.log(member.age); // 20
  console.log(member.skills); // ["JavaScript", "React", "Node"]

  // Accessing object properties using bracket notation
  console.log(member["name"]); // John
  console.log(member["age"]); // 20
  console.log(member["skills"]); // ["JavaScript", "React", "Node"]

  // Adding new properties to an object
  member.country = "USA";
  console.log(member.country); // USA

  // Updating object properties
  member.age = 30;
  console.log(member.age); // 30

  // Deleting object properties
  delete member.age;
  console.log(member.age); // undefined

  // Iterating over object properties
  for (key in member) {
    console.log(key + ": " + member[key]);
  }

  // Output:
  // name: John
  // skills: JavaScript,React,Node
  // country: USA
}