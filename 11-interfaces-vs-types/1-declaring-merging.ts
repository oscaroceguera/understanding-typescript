interface Song {
  artistName: string;
}

interface Song {
  songName: string;
}

const song: Song = {
  artistName: "Freddie",
  songName: "The Cain"
};

/* 
  TypeScript will automatically merge both interfaces declarations into one,
  so when we use this Song interface, we’ll have both properties.

  Declaration merging does not work with types. If we try to create two types
  with the same names, but with different properties, TypeScript would still
  throw us an error.

  Duplicate identifier Song.
*/

type Country = {
  name: string;
};

type Country = {
  state: string;
};
