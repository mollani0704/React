import React, { useState } from 'react';

const Input = () => {
    const [text, setText] = useState('');

    const onChange = event => {
        setText(event.target.value);
    };
    const onReset = () => {
        setText('');
    };
    return (
        <div>
            <input type="text" onChange={onChange} value={text} />
            <button onClick={onReset}>지우기</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    );
};

export default Input;
