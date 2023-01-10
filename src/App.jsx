import { useState } from 'react'
import SearchMovie from './components/SearchInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchMovie />
    </>
  )
}

export default App
