interface Book {
  id: number;
  author: string;
}

interface Recipe {
  id: number;
  cookingtime: number;
}

function mapById<T extends { id: number }>(array: T[]): { [key: number]: T } {
  return array.reduce((map, item) => ({ ...map, [item.id]: item }), {});
}

const books: Book[] = [{ id: 1, author: "A" }];
const recipies: Recipe[] = [{ id: 1, cookingtime: 10 }];

console.log(mapById(books));
console.log(mapById(recipies));
