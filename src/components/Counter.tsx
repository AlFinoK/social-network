import { FC, useState } from 'react'

export const Counter: FC = () => {
  let [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setCount((count = 0))
    }
  }
  return (
    <>
      <div className="couner">{count}</div>
      <button className="counter" onClick={increment}>
        +
      </button>
      <button className="counter" disabled={count <= 0} onClick={decrement}>
        -
      </button>
    </>
  )
}
