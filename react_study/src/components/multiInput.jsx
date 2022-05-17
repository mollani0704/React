import React from 'react';

const MultiInput = () => {
    return (
        <div>
            <input
                type="text"
                name="userid"
                placeholder="아이디"
                value={userid}
                ref={useridInput}
                onChange={onChange}
            />
            <input type="text" name="name" />
        </div>
    );
};

export default MultiInput;
