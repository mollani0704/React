import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { DiApple } from "react-icons/di";
import styles from './checkbox.module.css';

function CheckBox({children,checked, box, ...rest }){
    return(
        <div className={styles.checkbox}>
            <label>
             <input type='checkbox' checked={checked} {...rest}/>
             <div className={styles.icon}>{checked ? 
                      (<MdCheckBox className={styles.checked}/>):(<MdCheckBoxOutlineBlank/>)}</div>
            </label>
            <span>{children}</span>
            <div>
                {box ? <DiApple className={styles.icon2}/> : <DiApple className={styles.icon2_1}/>
               }
            </div>
        </div>
    )
}

export default CheckBox;