import React from 'react'
import ParentComponent, { Increment, Parent, ParentToChild } from './Components/ParentComponent'
import { FromParent } from './Components/ChildComponent'

const App = () => {
  return (
    <>
      <ParentComponent />
      <Parent />
      <ParentToChild />
      <Increment />
    </>
  )
}

export default App

// Parent → Child	Pass props like attributes	<Child message="Hello" />
// Child → Parent	Pass function from parent, call it in child	props.onEvent()
// Deep Children	Avoid prop drilling using Context API	useContext()

// Virtual DOM (VDOM):
// This is a lightweight, in -memory representation of the Real DOM.When there are changes to the application's state or props, React creates a new Virtual DOM and compares it with the previous one. This process, known as "diffing," allows React to efficiently identify only the necessary changes and apply them to the Real DOM, optimizing performance.

