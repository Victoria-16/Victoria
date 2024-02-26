import {useState} from "react";
function FunctionalCounter(){
    const [counter, setCounter] = useState(0)

    const increment = () => {
       //setCounter(counter + 1);
    };

    return<div>
        <div>Counter value: {counter} </div>
        <div><button onClick={increment}>increment</button></div>
    </div>;
}
export default FunctionalCounter;