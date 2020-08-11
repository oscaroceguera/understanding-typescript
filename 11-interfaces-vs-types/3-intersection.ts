/*
  Intersection allows us to combine multiple types into a single one type. 
  To create an intersection type, we have to use the & keyword:
*/

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

/*
  The nice thing here is that we can create a new intersection type combining two interfaces,
  for example, but not the other way around. We cannot create an interface combining two types,
  because it doesn’t work:
*/
interface NewName {
  name: string;
}

interface NewAge {
  age: string;
}

type NewPerson = NewAge & NewName;
