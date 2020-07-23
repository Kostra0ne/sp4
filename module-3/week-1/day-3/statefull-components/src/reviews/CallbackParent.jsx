import React from 'react'
import Child from "./CallbackChild"

export default function CallbackParent() {

    const parentCallback = (evt) => alert(evt.target.textContent);

    return (
        <div>
            <h1 className="title">Je suis le parent</h1>
            <Child callback={parentCallback} />
        </div>
    )
}
