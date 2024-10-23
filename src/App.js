import React, { useState, useMemo } from 'react';
const App = ( ) => {
  const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const slowFunction = (num) => {
        console.log('Running slow function...');
        for (let i = 0; i < 1000000000; i++) {} // Simulate a slow calculation
        return num * 2;
    };

    const memoizedValue = useMemo(() => slowFunction(count), [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Slow Computation Result: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something"/>
            <p>Typed Text: {text}</p>
        </div>
    );
}

export default App