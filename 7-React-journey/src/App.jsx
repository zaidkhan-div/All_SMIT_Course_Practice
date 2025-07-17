import React from 'react'
import ParentComponent, { Parent, ParentToChild } from './Components/ParentComponent'
import { FromParent } from './Components/ChildComponent'

const App = () => {
  return (
    <>
      <ParentComponent />
      <Parent />
      <ParentToChild />
    </>
  )
}

export default App

// Parent → Child	Pass props like attributes	<Child message="Hello" />
// Child → Parent	Pass function from parent, call it in child	props.onEvent()
// Deep Children	Avoid prop drilling using Context API	useContext()