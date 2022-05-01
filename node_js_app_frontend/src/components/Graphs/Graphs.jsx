import React, { useContext, useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import VignUpContext from "../../context/VignUpContext";

const Gradar = (score) => {
    const hum = (parseInt(score.score.exp) + parseInt(score.score.prop) + parseInt(score.score.assoc));
    let humanScore = 0;
    if (hum >= 8){
        humanScore = 3;
    }
    else if (hum >= 5){
        humanScore = 2;
    }
    else {
        humanScore = 1;
    }
    const data = [
        { name: 'rendement moyen', x: score.score.rdt },
        { name: 'type de sol', x: score.score.sol },
        { name: 'Nombre de parcelles', x: score.score.prc },
        { name: 'Exploitant', x: humanScore },
    ];

    return (
        <RadarChart height={600} width={600} 
            outerRadius="65%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="green" 
                fill="green" fillOpacity={0.5} />
        </RadarChart>
    );
}

export default Gradar;
