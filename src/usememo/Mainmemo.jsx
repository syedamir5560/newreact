import React, { useMemo, useState } from 'react'

function Mainmemo() {

    let [count, setCount] = useState(0)
    let [todos, setTodos] = useState([])
    const calc = useMemo(() => expensiveCalc(count), [count]);

    let addCount = () => {
        setCount(count + 1)
    }

    const addTodos = () => {
        setTodos((t) => [...t, "New Todo"]);
    };



    return (
        <div>

            <div>
                <h2>todos</h2>
                {
                    todos.map((todos, index) => {
                        return <p key={index}>
                            {todos}
                        </p>
                    })
                }
                <button onClick={addTodos}>add todos</button>
            </div>

            <h1>Count :{count}</h1>
            <button onClick={addCount}>Add Count</button>
            <p>Calculated Value:{calc}</p>

        </div>
    )
}

let expensiveCalc = (num) => {

    for (let i = 0; i < 1000000; i++) {
        num += 1
    }
    return num
}

export default Mainmemo