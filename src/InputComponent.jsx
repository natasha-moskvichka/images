import React from "react";
import {useState} from "react";

export default function InputComponent ({onHandler}) {
    const [userInfo, setUserInfo] = useState('');

    const handleChange = (evt) => {
        const value = evt.target.value;
        setUserInfo(value);
        onHandler(value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange}/>
           {/* <p>{userInfo}</p>*/}
        </div>
    )
}
