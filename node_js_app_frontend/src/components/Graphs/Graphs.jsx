import React, { useContext } from 'react';
import { Radar, RadarChart, PolarGrid, 
    PolarAngleAxis, PolarRadiusAxis } from 'recharts';

    const Gradar = (score) => {
    console.log(score);
    const data = [
        { name: 'rendement moyen', x: score.score.rdt },
        { name: 'type de sol', x: score.score.sol },
        { name: 'Nombre de parcelles', x: score.score.prc },
        { name: 'Exploitant', x: score.score.exp },
        // { name: 'Associés', x: score.score.assoc},
        // { name: 'propriétaire', x: score.score.prop }
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
