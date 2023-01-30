import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0)

    const setIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={setIncrement}>inc</button>
        </div>
    );
};

export default Counter;