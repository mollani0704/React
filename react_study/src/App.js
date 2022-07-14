import React, { useState, useRef, useMemo} from 'react';
import './App.css';
//import Counter from './component/counter';
//import Input from './component/input';
//import MultiInput from './component/multiinput';
//import Userlist from './component/userlist';
import Userlists from './component/userlists';
import CreateUser from './component/createuser';

function countActiveUser(users){
  console.log('선택된 사용자 수를 세는중 ...');
  return users.filter(user => user.active).length;
}


//상태관리_인터렉션
function App() {
  // 여기서부터는 상태값을 활용해서 배열 추가 삭제 로직
  
  //user 추가하기 위해 초기값설정
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
 
  const onChange = e =>{
    const { name, value } = e.target;//onChange 일어난 input의 name,value 속성
    setInputs({
      ...inputs,//기존의 input태그 상태 즉 공백
      [name]: value //이벤트가 일어난 name속성의 input 태그이 입력된값(value)
    })
  }


  //리스트 항목 
  const [users, setUsers]=  useState([
    {
        id: 1,
        username: '김사과',
        email: 'apple@apple.com'
    },
    {
        id: 2,
        username: '오렌지',
        email: 'orange@orange.com'
    },
    {

        id: 3,
        username: '반하나',
        email: 'banana@banana.com'
    },
    {
        id: 4,
        username: '이메론',
        email: 'melon@melon.com'
    },
    {
        id: 5,
        username: '배애리',
        email: 'berry@berry.com'
    }
]);
  //user 추가함수

  const nextId = useRef(6); //dom 선택하는 함수
  const onCreate = () => {
    const user ={
      id: nextId.current,
      username,
      email
    }
    // 배열에 새 항목을 추가할 때는 spread연산자 또는 concat 함수를 사용
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({ //배열에 추가후 입력창들에 빈공백으로 초기값설정
      username: '',
      email: ''
    });

    nextId.current += 1;//다음에 추가될 user의 인덱스값을 미리 연산
  } 


  //리스트삭제함수
  const onRemove = (id) => {
     setUsers(users.filter(user => user.id !== id));
     //filter-조건해당되는 값만 추출 
   }
   
  //사용자를 선택했을때 변화를 주는 함수(조건부렌더링)
  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? { ...user, active: !user.active } : user)
    );
  };

  //사용자수를 카운트
  const count =  useMemo(() => countActiveUser(users), [users])

  return (
    <div>
      {/* 이부분은 하나하나 상단에 연결된거 주석해제후 연결  */}
      {/* <Counter/> */}
      {/* <Input/> */}
      {/* <MultiInput/> */}
      {/* <Userlist /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <Userlists users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>선택된 사용자 수 : {count}</div>
    </div>
  );
}

export default App;
