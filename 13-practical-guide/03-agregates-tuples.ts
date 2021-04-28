/**
 * Las tuplas también son una estructura de datos indexada secuencial,
 * pero el tipo de sus elementos puede variar según la definición fija:
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

// Create a user tuple

const userTuple: [User, number] = [user1, 10];
