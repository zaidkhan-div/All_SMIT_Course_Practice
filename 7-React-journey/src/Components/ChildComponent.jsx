
const ChildComponent = ({ onDataSend }) => { // onDataSend is prop

    const handleClick = () => {
        const dataToSend = 'Hello from ChildComponent';
        onDataSend(dataToSend);
    }

    return (
        <div>
            <button onClick={handleClick}>Send Data to Parent</button>
        </div>
    )
}
export default ChildComponent


export const Child = ({ sendDataToPrent }) => {
    return (
        <button onClick={() => sendDataToPrent("Hello Parent")}>SendData</button>
    )
}

export const FromParent = (props) => {
    return <p>Data from parnet: {props.data}</p>
}