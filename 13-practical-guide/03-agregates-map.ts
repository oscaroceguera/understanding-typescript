/**
 * Maps son comunmente usados para manejar un asociacion de keys y values
 * y para representar datos de aplicaciones de dominios
 */

// Creates a map-like type

type User = {
  id: number;
  username: string;
  name: string;
};

// Creates an instance of the user object
const user: User = {
  id: 1,
  username: "Superman",
  name: "Clark lent",
};
