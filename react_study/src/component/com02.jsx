import React from "react";
import Com02Item from "./com02Item";

function Com2(){
    return(
        <div style={{margin:'0 auto',
                     width:'1200px', 
                     height:'300px', 
                     backgroundColor:'skyblue',
                     }}>
            <h3 style={{height:'50px',textAlign:'center'}}>com2</h3>
            {/* 컴포넌트 재사용 */}
            <Com02Item/>
            <Com02Item/>
            <Com02Item/>
            <Com02Item/>
            <Com02Item/>
            
        </div>
    )
}

export default Com2;