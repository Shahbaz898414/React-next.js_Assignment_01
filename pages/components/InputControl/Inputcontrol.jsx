import React from 'react';
import style from './Input.module.css';

function Inputcontrol({ label, ...props }) {
  return (
    <div className={style.container}>
      {label && <label htmlFor="" className={style.label} id="main">{label}</label>} {/* Fix htmlFor attribute */}

      <input type="text" {...props}  className={style.input}/>
    </div>
  );
}

export default Inputcontrol;
