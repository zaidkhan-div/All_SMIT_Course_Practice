import React, { useEffect, useState } from 'react'
import ChildComponent, { Child, FromParent } from './ChildComponent';

const ParentComponent = () => {
    const [dataFromChild, setDataFromChild] = useState(null);

    const handleChildData = (data) => { // handleChilData is a CallBack
        setDataFromChild(data);
    }
    return (
        <div>
            <p>Data From Child: {dataFromChild}</p>
            <ChildComponent onDataSend={handleChildData} />
        </div>
    )
}
export default ParentComponent;


export const Parent = () => {
    const [dataFromChild, setDataFromChild] = useState("");
    // const handleData = (dataFromChild) => {
    //     console.log("Data received from child:", dataFromChild);
    // }

    return (
        <>
            {/* <Child sendDataToPrent={handleData} /> */}
            <p>Received data from child: {dataFromChild}</p>
            <Child sendDataToPrent={setDataFromChild} />
        </>
    )
}


export const ParentToChild = () => {
    return <FromParent data="Data to child" />
}

export const Increment = () => {
    const [count, setCount] = useState(0);

    const handleChange = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log('Mount');
        return () => {
            console.log('UnMount')
        }
    }, [])

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleChange}>Click Me</button>
        </>
    )
}