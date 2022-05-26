import React from 'react';
import './App.css';

import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead';
import TodoList from './components/todoList';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <TodoTemplate>
                <TodoHead />
                <TodoList />
            </TodoTemplate>
        </div>
    );
}

export default App;
