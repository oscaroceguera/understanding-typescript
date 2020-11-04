/*
  A generic type is a way of reusing part of a given type. It helps to capture the type T passed in as a parameter.
*/
/*
  To construct a generic type, you need to use the brackets and pass T as a parameter.
  Here, I use T (the name is up to you) and then, call the function showType twice with
  different type annotations because it's generic - it can be reused.
*/
function showType(args) {
  console.log(args);
}
showType("test");
showType(1);
showType(false);
function showTypeTwo(args) {
  console.log(args);
}
showTypeTwo({ id: 1, name: "test" });
function showTypeThree(args) {
  console.log(args);
}
showTypeThree({ id: 2, name: 4 });
function showTypeFour(args) {
  console.log(args);
}
showTypeFour({ id: 1, name: "oscar" });
function showTypeFive(args) {
  console.log(args);
}
showTypeFive({ id: "192", name: ["this", "is", "a", "test"] });
