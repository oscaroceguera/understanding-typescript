/*
  A generic type is a way of reusing part of a given type. It helps to capture the type T passed in as a parameter.
*/

/*
  To construct a generic type, you need to use the brackets and pass T as a parameter.
  Here, I use T (the name is up to you) and then, call the function showType twice with
  different type annotations because it's generic - it can be reused.
*/

function showType<T>(args: T) {
  console.log(args);
}

showType("test");
showType(1);

showType(false);

/*
  Here, we have another example that has an interface GenericType which receives a generic type T.
  And since it's reusable, we can call it with first a string, and then a number.
*/

interface GenericType<T> {
  id: number;
  name: T;
}

function showTypeTwo(args: GenericType<string>) {
  console.log(args);
}

showTypeTwo({ id: 1, name: "test" });

function showTypeThree(args: GenericType<number>) {
  console.log(args);
}

showTypeThree({ id: 2, name: 4 });

/*
  A generic type can receive several arguments. Here, we pass in two parameters:
  T and U, and then use them as type annotations for the properties. That said,
  we can now use the interface and provide different types as argument.
*/

interface GenericTypeTwo<T, U> {
  id: T;
  name: U;
}

function showTypeFour(args: GenericTypeTwo<number, string>) {
  console.log(args);
}

showTypeFour({ id: 1, name: "oscar" });

function showTypeFive(args: GenericTypeTwo<string, string[]>) {
  console.log(args);
}

showTypeFive({ id: "192", name: ["this", "is", "a", "test"] });
