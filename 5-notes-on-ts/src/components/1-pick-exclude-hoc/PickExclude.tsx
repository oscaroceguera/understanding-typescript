type User = {
  id: number;
  name: string;
  location: string;
  registeredAt: Date;
}

Exclude<User, "id" | "registeredAt"> // removes id and registeredAt

// We can archive the same thinng with Pick
Pick<User, "name" | "location">

// We can rewrite our above definition:
type Omit<T, K> = Pick<T, Exclude<Keyof Text, K>>;
type Diff<T, K> = Omit<T, keyof K>;

type ExtractName = {
  name: string;
};

// function removeName<Props extends ExtractName>(
//   props: Props
// ): Pick<Props, Exclude<keyof Props, keyof ExtractName>> {
//   const { name, ...rest } = props;
//   // do something with name...
//   return rest;
// }

// Now that we have a Diff function we can rewrite our removeName funcion:
function removeName<Props extends ExtractName>(
  props: Props
): Diff<Props, ExtractName>{
  const {name, ...rest} = props
  return rest
}