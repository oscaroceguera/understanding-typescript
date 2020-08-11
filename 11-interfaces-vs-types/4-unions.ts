/*
  Union types allow us to create a new type that can have a value of one or a few more types.
  To create a union type, we have to use the | keyword.
*/

type Man = {
  name: string;
};

type Woman = {
  name: string;
};

type Person = Man | Woman;

/*
  Similar to intersections, we can create a new union type combining two interfaces,
  for example, but not the other way around:
*/
interface Man2 {
  name: "string";
}

interface Woman2 {
  name: "string";
}

type Person2 = Man2 | Woman2;
