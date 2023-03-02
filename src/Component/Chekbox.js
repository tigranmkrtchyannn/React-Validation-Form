import React, { useState } from "react";
import "./Checkbox.css"


function CheckBox() {
    const [checked, setChecked] = useState(false);

 const toggle=()=>{
  return   setChecked(checked=>!checked)
 }

    return (
        <>
        <div class="checkBox">
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
                className="smallBox"
            />

         <span className="text">I agree to the  Terms of Service and Privacy Police</span>
         </div>
        </>



    )

}
export default CheckBox