"use client"
import { useState } from "react";

export default function AddToCartComponent () {
    // create state
    // state, functionUpdateState initialize value
    const [count, setCount] = useState(0);
    // update state valuejj
    // setCount(count+1);

    return (
        <div>
            <h1>Cart: {count}</h1>
            <button className="border p-4 rounded"
            onClick={() => setCount(count+1)}>Add to cart</button>
        </div>

    );
}