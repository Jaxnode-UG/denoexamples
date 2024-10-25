import { Person } from "./person.ts";

function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

const dave: Person = {
  name: "David",
  age: 54,
};

console.log(greet(dave));
