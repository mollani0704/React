import React,{useState} from "react";

function Input(){
 //input 상태관리   
 //초기값 설정
 const [text, setText] = useState('');

 const onChange = (e) => {
    setText(e.target.value);
 }
 const onReset = () => {
    setText('');
 }

 return(
        <div>
              <input onChange={onChange} value={text}/>
              <button onClick = {onReset}>지우기</button>
              <div>
                  <b>값 : {text}</b>
              </div>
        </div>
    )
}

export default Input;