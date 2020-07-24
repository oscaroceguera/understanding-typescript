// TODO: Generics in typescript significantly improve code reusability.
interface Item<T> {
  id: number;
  value: T;
}

interface Post {
  title: string;
}

const item1: Item<number> = { id: 1, value: 10 };
const item2: Item<Post> = { id: 1, value: { title: "post name" } };
const item3: Item<string> = { id: 1, value: 'diez' };
const item4: Item<boolean> = { id: 1, value: true };
console.log('item1', item1)
console.log('item2', item2)
console.log('item3', item3)
console.log('item4', item4)
