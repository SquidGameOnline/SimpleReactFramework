import React, {useState} from "react";
import {Button} from "react-bootstrap";

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>You clicked {count} times</h1>
            <Button variant="primary" onClick={() => setCount(count + 1)}>
                ADD
            </Button>
            &nbsp;
            <Button variant="warning" onClick={() => setCount(count - 1)}>
                Sub
            </Button>
        </div>
    )
}


export default Counter;