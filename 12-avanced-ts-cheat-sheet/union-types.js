/*
  Union types allow you to have different types annotation within a given variable.

  The function showType is a union type that accepts both strings and numbers as a parameter.
*/
function showType(arg) {
  console.log(arg);
}
showType("test");
showType(1);
