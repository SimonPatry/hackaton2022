import React from "react";
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const Rad = (score) => {
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
    // const data = [
    //     { name: 'rendement moyen', x: score.score.rdt },
    //     { name: 'type de sol', x: score.score.sol },
    //     { name: 'Nombre de parcelles', x: score.score.prc },
    //     { name: 'Exploitant', x: humanScore },
    // ];

    const data = [
        {
          data: {
            rdt: score.score.rdt/3,
            soil: score.score.sol/3,
            nbpc: score.score.prc/3,
            exp: humanScore/3
          },
          meta: { color: '#58FCEC' }
        }
    ];
  
    const captions = {
    // columns
    rdt: 'rendement moyen',
    soil: 'type de sol',
    nbpc: 'Nombre de parcelles',
    exp: 'Exploitant'
    };
    console.log(data);
    return (
    <div>
        <RadarChart
            captions={{
            // columns
            rdt: 'rendement moyen',
            soil: 'type de sol',
            nbpc: 'Nombre de parcelles',
            exp: 'Exploitant'
            }}
            data={data}
            size={500}
        />
        </div>
    );
}

export default Rad;