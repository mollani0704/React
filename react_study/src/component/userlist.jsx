import React from "react";

function User({user}){ //{user}배열객체 전달
    return(
            <div>
              <b>{user.username}</b><span>{user.email}</span>
            </div>
    )
}

function Userlist(){
    const users = [
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
    ];
    return(
        <div>
              {/* 
              <User user={users[0]} />
              <User user={users[1]} />
              <User user={users[2]} />
              <User user={users[3]} />
              <User user={users[4]} /> 
              */}
              
            {users.map((user, index) => (
              <User user={user} key={index} />
              ))    
            //함수를 선언하고 일반적인 처리할때 {} 화면에 렌더링처리할때() 
            }
        </div>
    );
}

export default Userlist;