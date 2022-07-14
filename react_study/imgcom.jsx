import React from "react";
import "./imgcom.css"
import Img02 from "./img01.jpg";

function Imgcom(){

    
    return(
        <div>
           {/* <img src='./img01.jpg' alt=""/> */}
           <img src={require('./img01.jpg')} alt=""/>
           <img src={Img02} alt=""/>
           <div className="box01">aaaa</div>
        </div>
    )
}
export default Imgcom;