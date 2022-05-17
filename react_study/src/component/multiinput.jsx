import React, { useState, useRef } from "react"

function MultiInput() {
    const [inputs, setInputs] =useState({
        userid:'',
        name:''  
    })

    //DOM 을 선택해야 하는 상황이 발생 
    const useridInput = useRef();// DOM을 선택  

    const {userid, name} = inputs; //비 구조화 할당을 통해 값을 전달 아래 35번줄에 변환된 상태값을 전달
    
    const onChange = (e) => {
        const { value, name } = e.target; //e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤  ... spread 문법 (객체를 복사)
            [name]:value // name 키를 가진 값을 value 로 설정
        });
    };    

    const onReset = () => {
        setInputs({
            userid:'',
            name:''  
        })
    }

    return(
        <div>
           <input name="userid" onChange={onChange} placeholder='아이디' value={userid} ref={useridInput}/> 
           <input name="name" onChange={onChange} placeholder='이름'value={name}/>
           <button onClick={onReset}>지우기</button>
            <div>
                <b>아이디 : {userid}</b>, <b>이름 :  {name}</b>
            </div>
        </div>
    )
}

export default MultiInput;