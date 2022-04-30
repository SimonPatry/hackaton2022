import React, { useContext, useState, useEffect } from "react";
import  VignUpContext from "../../context/VignUpContext";
import {Link} from "react-router-dom";
import "./welcome.scss"
import {Box, Modal, Typography} from "@mui/material";
import {fetchJson} from "../../utils/fetch";

const Welcome = () => {
    
    const { scoringPath, setScoringPath } = useContext(VignUpContext);    
    return(
        <>
            <h1>Welcome</h1>
            <div>
                <h2>Réalisez Votre Scoring !</h2>
                
            </div>
            
            <div>
                
            </div>
        </>
    )
}

/*
<div>
                <h2>Accès à la doc</h2>
                <button className="btn btn-primary">
                    <!--<Link to={scoringPath} className="detailsButton">Scoring</Link>
                </button>
            </div>
*/
export default Welcome;