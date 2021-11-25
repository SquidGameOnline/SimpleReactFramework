import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";

function Click() {
    const  [count,setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <h1>You clicked {count} times</h1>
            <Button variant="primary" onClick={() => setCount(count + 1)}>
                Click  me !
            </Button>
        </div>
    )
}

export default Click