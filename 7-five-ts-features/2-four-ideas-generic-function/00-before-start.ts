interface Book {
  id: number;
  author: string;
}

interface Recipe {
  id: number;
  cookingTime: number;
  ingredients: string[];
}

const books: Book[] = [
  { id: 1, author: "A" },
  { id: 1, author: "Z" },
  { id: 2, author: "A" },
  { id: 3, author: "C" },
];

const recipes: Recipe[] = [
  { id: 1, cookingTime: 32, ingredients: ["salad", "pastel", "sal"] },
  { id: 2, cookingTime: 24, ingredients: ["salad", "pasta"] },
];

// TODO: Map by key
interface Item<T = any> {
  [key: string]: T;
}

function mapByKey<T extends Item>(array: T[], key: keyof T): Item<T> {
  return array.reduce((map, item) => ({ ...map, [item[key]]: item }), {});
}

console.log("<<< Map by key >>>");
// mapByKey(books, "wrongKey") // error. Not keyof T -> (not key of Book)
console.log(mapByKey(books, "id")); // {"1":{"id":1,"author":"A"},"2":{"id":2,"author":"A"},"3":{"id":3,"author":"C"}}
console.log(mapByKey(books, "author")); // { A: { id: 2, author: 'A' }, C: { id: 3, author: 'C' } }

// TODO: Group by key
interface ItemGroup<T> {
  [key: string]: T[];
}

function groupByKey<T extends Item>(array: T[], key: keyof T): ItemGroup<T> {
  return array.reduce<ItemGroup<T>>((map, item) => {
    const itemKey = item[key];
    if (map[itemKey]) {
      map[itemKey].push(item);
    } else {
      map[itemKey] = [item];
    }

    return map;
  }, {});
}

console.log("<<< Group by key >>>");
//groupByKey(books, "randomString") // error. Not keyof T -> (not key of Book)
console.log(groupByKey(books, "author")); // {"A":[{"id":1,"author":"A"},{"id":2,"author":"A"}],"C":[{"id":3,"author":"C"}]}
console.log(groupByKey(books, "id")); // {"A":[{"id":1,"author":"A"},{"id":2,"author":"A"}],"C":[{"id":3,"author":"C"}]}

// TODO Merge
console.log("<<< Merge >>>");
function merge<T extends Item, K extends Item>(a: T, b: K): T & K {
  return { ...a, ...b };
}

const result = merge(books[0], recipes[0]); // {"id":1,"author":"A","cookingTime":10,"ingredients":["bread"]}
console.log("result", result);
console.log("author", result.author); // "A"
console.log("cookingTime", result.cookingTime);
// result.randomKey // error

// TODO: SORT

type ValueGetter<T = any> = (item: T) => string | number;
type SortingOrder = "ascending" | "descending";

function sortBy<T extends Item>(
  array: T[],
  key: ValueGetter<T>,
  order: SortingOrder = "ascending",
) {
  if (order === "ascending") {
    return [...array].sort((a, b) => key(a) > key(b) ? 1 : -1);
  }
  return [...array].sort((a, b) => key(a) > key(b) ? -1 : 1);
}

// Sort by author
const sortByAuthor = sortBy(books, (item) => item.author, "descending");
console.log("sortByAuthor", sortByAuthor);

// Sort by number of ingredients
const sortByNumberOfIngredients = sortBy(
  recipes,
  (item) => item.ingredients.length,
);
console.log("sortByNumberOfIngredients", sortByNumberOfIngredients);

// Sort very nested objects
const arrayOfNestedObjects = [{ level1: { level2: { name: "A" } } }];
sortBy(arrayOfNestedObjects, (item) => item.level1.level2.name);
