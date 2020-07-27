import React, {useState} from 'react'

interface ICounter {
  initial?: number;
}

const Counter: React.FC<ICounter> = ({initial = 0}) => {
  const [clicks, setClicks] = useState(initial)
  return (
    <>
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  )
}

export default Counter