/**
 * Vectores son una structura de datos sequencual e indexada que tienen un tipo
 * fijo para todos sus elementos.
 * Si bien esta no es una característica compatible con JavaScript, el sistema
 * de tipos de TypeScript permite a los desarrolladores emular este concepto
 */

// Creates a map-like type

type User = {
  id: number;
  username: string;
  name: string;
};

// Creates instances of the user object

const user1: User = {
  id: 1,
  username: "Superman",
  name: "Clark Kent",
};

const user2: User = {
  id: 2,
  username: "WonderWoman",
  name: "Diana Prince",
};

const user3: User = {
  id: 3,
  username: "Spiderman",
  name: "Peter Parker",
};

// Create a vector of users

const userVector: User[] = [user1, user2, user3];
