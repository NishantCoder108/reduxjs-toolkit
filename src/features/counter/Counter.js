import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue, decrementByValue } from "./counterSlice";

export default function Counter() {

    const [incrementByVal, setIncrementByVal] = useState(0)
    const incrementValue = Number(incrementByVal) || 0

    const [decrementByVal, setDecrementByVal] = useState(0)
    const decrementValue = Number(decrementByVal) || 0


    const count = useSelector((state) => state.counter.count);
    console.log("count", count)
    const dispatch = useDispatch();

    return (
        <section style={{ textAlign: 'center' }}>
            <p>{count}</p>

            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <div>
                <input type='text' value={incrementByVal} onChange={(e) => setIncrementByVal(e.target.value)} />
                <button onClick={() => dispatch(incrementByValue(incrementValue))}>
                    incrementByValue
                </button>


                <br />
                <br />
                <input type='text' value={decrementByVal} onChange={(e) => setDecrementByVal(e.target.value)} />
                <button onClick={() => dispatch(decrementByValue(decrementValue))}>
                    decrementByValue
                </button>
            </div>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </section>
    );
}
