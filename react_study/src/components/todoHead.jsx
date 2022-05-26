import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e0ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-wight: bold;
    }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2022년 5월 25일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">오늘할일들</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
