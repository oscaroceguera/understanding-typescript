/*
  PARTIAL:
  Partial allows you to make all properties of the type T optional.
  It will add a ? mark next to every field.

  As you can see, we have an interface PartialType which is used as
  type annotation for the parameters received by the function showType().
  And to make the properties optional, we have to use the Partial keyword
  and pass in the type PartialType as an argument. That said, now all fields
  become optional.
*/
console.log("<<<<PARTIAL>>>>");
function showType(args) {
  console.log(args);
}
showType({ id: 1 });
showType({ firstName: "oscar", lastName: "Done" });
/*
  REQUIRED:
  Unlike Partial, the Required utility makes all properties of the type T required.

  The Required utility will make all properties required even if we make them
  optional first before using the utility. And if a property is omitted,
  TypeScript will throw an error.
*/
console.log("<<<<REQUIRED>>>>");
function showTypeRequired(args) {
  console.log(args);
}
showTypeRequired({ id: 1, firstName: "oscar", lastName: "oceguera" });
// showTypeRequired({ id: 1 }) // error
/*
  READONLY: Readonly<T>
  This utility type will transform all properties of the type T in
  order to make them not reassignable with a new value.
*/
console.log("<<<<READONLY>>>>");
function showTypeReadonly(args) {
  args.name = "oscar"; // Error: Cannot assign to 'id' because it is a read-only property.
  console.log(args);
}
showTypeReadonly({ id: 1, name: "JOe" });
/*
  PICK: Pick<T, K>
  It allows you to create a new type from an existing model T by selecting some
  properties K of that type.
*/
console.log("<<<<Pick>>>>");
function showTypePick(args) {
  console.log(args);
}
showTypePick({ firstName: "John", lastName: "Doe" });
// Output: {firstName: "John"}
// showTypePick({ id: 3 })
// Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'
/*
  OMIT: Omit<T, K>
  The Omit utility is the opposite of the Pick type. And instead of selecting
  elements, it will remove K properties from the type T
*/
console.log("<<<<OMIT>>>>");
function showTypeOmit(args) {
  console.log(args);
}
showTypeOmit({ id: 7 });
// Output: {id: 7}
// showTypeOmit({ firstName: "John" })
// Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
