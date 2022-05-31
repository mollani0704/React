import React from "react";
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
   background-color: #38d9a9;

   &:hover{
    background-color: #63e6be;
   }
   &:active {
    background: #20c997;
   }

   cursor: pointer;
   width: 80px;
   height: 80px;
   display: flex;
   align-items: center;
   jusify-content: center;
   font-size: 60px;

   position: absolute;
   left: 50%;
   bottom: 0px;
   z-index: 5;
   transform: translate(-50%, 50%);
   color: white;
   border-radius: 50%;
   border: none;
   transition: 0.2s all ease-in;
   ${props => props.open && css`
        background-color: #ff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;



function TodoCreate(){
    return(
        <div>
           <InsertFormPositioner>
             <InsertForm>
              <Input placeholder="할 일을 입력 후, Enter를 누르세요" 
              value={value}/>
             </InsertForm>
           </InsertFormPositioner>

           <CircleButton >
               <MdAdd/>
           </CircleButton >
        </div>
    )
}

export default TodoCreate;