/*
  Tuples are a very helpful concept in TypeScript, it brought to us this
  new data type that includes two sets of values of different data types.
*/

type Reponse = [string, number];

/*
  But, in TypeScript, we can only declare tuples using types and not interfaces.
  There’s no way we can declare a tuple in TypeScript using an interface, but
  you still are able to use a tuple inside an interface, like this:
*/
interface Response {
  value: [string, number];
}
