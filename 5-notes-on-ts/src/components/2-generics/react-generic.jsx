import React from 'react';

type RowProps<Type> = {
  input: Type | Type[],
};

function Rows<Type extends number | string>({ input }: RowProps<Type>) {
  if (Array.isArray(input)) {
    return (
      <div>
        {input.map((i, idx) => (
          <div key={idx}>{i}</div>
        ))}
      </div>
    );
  }
  return <div>{input}</div>;
}

// usage
<Rows input={[1]} />
<Rows input={1} />
<Rows input="1" />
<Rows input={["1"]} />
<Rows input={true} /> //Error!