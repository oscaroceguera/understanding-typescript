/*
  OMIT:
  Omit<T, K> according to the official documentation Constructs a type by picking
  all properties from T and then removing K. In other words Omit is a generic utility
  type, that drops keys of T specified in K. One of the use-cases where you might need
  this utility is working with DTOs. If your project is using a strict serialisation,
  you might find yourself creating a lot of boilerplate code to describe different DTOs.
  Let's consider an example of how we can benefit from Omit in that case:
*/
interface Post {
  id: number;
  title: string;
  createdAt: string;
}

type CreatePostDto = Omit<Post, "id" | "createdAt">;

const createDto: CreatePostDto = {
  title: "My post",
  id: 1, // error
  createdAt: "2020-06-06", // error
};

/*
  PICK:
  Pick does the opposite of Omit. Pick<T, K> Constructs a type by picking the set of
  properties K from T. Continuing the same example with DTOs, here is how you can define
  a type of UpdatePostDto :
*/
type UpdatePostDto = Pick<Post, "id" | "title">;

const updateDto: UpdatePostDto = {
  id: 1,
  title: "My new post",
  createdAt: "2020-06-06", // error
};

/*
  Pick and Omit can be used to achieve the same goal because Pick<Post, "id" | "title">
  is the same as Omit<Post, "createdAt">. You can always decide what is shorter or more readable to use.
*/

/*
  PARTIAL:
  Partial<T> is a generic utility type, that makes all properties of the provided interface optional.
  My favourite example of using Partial is updating objects via merging. It's especially common when
  you are working with state management and state updates.
*/
interface AppState {
  posts: Post[];
  userName: string;
}

function updateState(state: AppState, update: Partial<AppState>): AppState {
  return { ...state, ...update };
}

const initialState: AppState = {
  posts: [],
  userName: "gleb",
};

const update: Partial<AppState> = {
  userName: "John",
};

updateState(initialState, update);

/*
  READONLY:
  Readonly<T> is another handy utility, which helps while working with immutable data.
  If you'd like to enforce immutability try using Readonly:
*/
const state: Readonly<AppState> = {
  posts: [],
  userName: "gleb",
};

state.posts = []; // error: Cannont assign to 'posts' because it is a read-only property
const updatedState: Readonly<AppState> = { ...state, posts: [] }; // ok

/*
  RECORD:
  I have already talked about Record<T, K> in this post, but this utility is definitely
  worth mentioning one more time.
  During my daily duties, I have to deal a lot with data grids. Most of them have a very
  similar pattern: they define every row as a key-value map. It's often the case that the
  row interface can be defined quite loosely:
*/
type Cell = string;

interface Row {
  [key: string]: Cell;
}

/*
  It means that you can potentially add as many keys as you want. Here is an example of
  the row that represents a single post object:
*/
const post: Post = { id: 1, title: "my post", createdAt: "2020-06-06" };

const row: Row = {
  title: post.title,
  createdAt: post.createdAt,
  randomKey: "is allowed",
};

// Luckily there is a nice way to constrain allowed keys by using Record:
type PostRow<T> = Record<keyof T, Cell>;

const postRow: PostRow = {
  id: post.id.toString(),
  title: post.title,
  createdAt: post.createdAt,
  randomKey: "sddd", // error
};
