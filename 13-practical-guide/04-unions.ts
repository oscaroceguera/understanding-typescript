import fetch from "node-fetch";

type User = {
  id: number;
  username: string;
  name: string;
  email: string;
};

async function fetchFromEmail(email: string) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsed: User[] = await res.json();
  const user = parsed.find((u: User) => u.email === email);

  if (user) return fetchFromId(user.id);
  return undefined;
}

function fetchFromId(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((user) => user.address);
}

function getUserAddress(user: User | string) {
  if (typeof user === "string") return fetchFromEmail(user);
  return fetchFromId(user.id);
}

getUserAddress("Rey.Padberg@karina.biz").then(console.log).catch(console.error);

const us: User = {
  id: 11,
  username: "kraneo",
  name: "oscar",
  email: "krane12@sc.com",
};

// NOTA: tuplas y unions van bien juntos
const userTuple: Array<User | number> = [us, 10, 20, us, 30];

// Esto tambien es posible de espicificar ambos el tamaño y el tipo de cadad elemento en el array
const userTuple2: [User, number] = [us, 10, 20, us, 30]; // Error: el array debe de tener un tamaño de 2 y debe de ser un User y un numero
const anotherUserTuple: [User, number] = [us, 10]; // COrrect
