import { useEffect } from "react";

const ChildComponent = ({ onDataSend }) => { // onDataSend is prop

    const handleClick = () => {
        const dataToSend = 'Hello from ChildComponent';
        onDataSend(dataToSend);
    };

    return (
        <div>
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    )
};
export default ChildComponent;


export const Child = ({ sendDataToPrent }) => {

    useEffect(() => {
        sendDataToPrent("Hello Parent")
    }, [])

    return // <p onClick={() => sendDataToPrent("Hello Parent")}>SendData</p>  


};

export const FromParent = (props) => {
    return <p>Data from parent: {props.data}</p>
};