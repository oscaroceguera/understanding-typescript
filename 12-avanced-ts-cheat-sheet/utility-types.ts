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
interface PartialType {
  id: number;
  firstName: string;
  lastName: string;
}

function showType(args: Partial<PartialType>) {
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
interface RequiredType {
  id: number;
  firstName?: string;
  lastName?: string;
}

function showTypeRequired(args: Required<RequiredType>) {
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

interface ReadonlyType {
  id: number;
  name: string;
}

function showTypeReadonly(args: Readonly<ReadonlyType>) {
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
interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

function showTypePick(args: Pick<PickType, "firstName" | "lastName">) {
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
interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

function showTypeOmit(args: Omit<PickType, "firstName" | "lastName">) {
  console.log(args);
}

showTypeOmit({ id: 7 });
// Output: {id: 7}

// showTypeOmit({ firstName: "John" })
// Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'

/*
  EXTRACT: Extract<T, U>
  Extract allows you to construct a type by picking properties that are present in two different types. The utility will extract
  from T all properties that are assignable to U
*/
console.log("<<<<Extract>>>>");
interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

type ExtractType = Extract<keyof FirstType, keyof SecondType>;
// Output: "id"

/*
  EXCLUDE:
  Unlike Extract, the Exclude utility will construct a type by excluding properties that are already
  present in two different types. It excludes from T all fields that are assignable to U.
*/
console.log("<<<<EXCLUDE>>>>");
interface FirstTypeTwo {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondTypeTwo {
  id: number;
  address: string;
  city: string;
}

type ExcludeType = Exclude<keyof FirstTypeTwo, keyof SecondTypeTwo>;

// Output; "firstName" | "lastName"

/*
  RECORD: Record<K,T>
  This utility helps you to construct a type with a set of properties K of a
  given type T. Record is really handy when it comes to mapping the properties
  of a type to another one.
*/

interface EmployeeType {
  id: number;
  fullname: string;
  role: string;
}

let employees: Record<number, EmployeeType> = {
  0: { id: 1, fullname: "John Doe", role: "Designer" },
  1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
  2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
};

// 0: { id: 1, fullname: "John Doe", role: "Designer" },
// 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
// 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }

/*
  NONNULLABLE:
  It allows you to remove null and undefined from the type T.
*/

type NonNullableType = string | number | null | undefined;

function showType(args: NonNullable<NonNullableType>) {
  console.log(args);
}

showType("test");
// Output: "test"

showType(1);
// Output: 1

showType(null);
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined);
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.
