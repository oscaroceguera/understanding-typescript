const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"]
};

person.role = [10, 'admin']

let favoriteActivities: string[]
favoriteActivities = ['sports']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby)
}