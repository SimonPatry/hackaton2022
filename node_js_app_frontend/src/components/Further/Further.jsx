import React, { useContext, useState, useEffect } from "react";
import  VignUpContext from "../../context/VignUpContext";
import "./further.scss"


const Further = () =>{

    const { newForm } = useContext(VignUpContext); 
    console.log("form: " + newForm);
    return (
        <>
            <div>
                <h1>Allez plus loin !</h1>
            </div>
        </>
    )
}

export default Further;