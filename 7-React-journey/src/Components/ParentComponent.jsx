import React, { useState } from 'react'
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
    const handleData = (dataFromChild) => {
        console.log("Data received from child:", dataFromChild);
    }
    return (
        <>
            <Child sendDataToPrent={handleData} />
        </>
    )
}


export const ParentToChild = () => {
    return <FromParent data="Data to child" />
}