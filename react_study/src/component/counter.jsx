import React, { useState } from "react";

function Counter(){
   //hooks함수
   //상태관리를 위해서 초기값을 설정
   const [number, setNumber]= useState(0);

   const plus = () => {
      setNumber(number + 1);
      console.log('1 더했어요')
   }
   const miuns = () => {
    setNumber(number - 1);
    console.log('1 더했어요')
 }

    return(
     <div>
          <h2>{number}</h2>
          <button onClick={plus}>더하기</button>
          <button onClick={miuns}>빼기</button>
     </div>
    );
}

export default Counter;