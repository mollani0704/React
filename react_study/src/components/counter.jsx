import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(number + 1);
        console.log('1 더하다');
    };

    const minus = () => {
        setNumber(number - 1);
        console.log('1 뺴다');
    };

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={plus}> 더하기</button>
            <button onClick={minus}> 빼기</button>
        </div>
    );
};

export default Counter;
