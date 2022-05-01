import React, { useContext } from 'react';
import dpe1 from '../../assets/img/dpe1.png';
import dpe2 from '../../assets/img/dpe2.png';
import dpe3 from '../../assets/img/dpe3.png';
import dpe4 from '../../assets/img/dpe4.png';

const Dpe = (dpe) => {
    console.log("dpe: " + dpe.dpe);
    if (parseInt(dpe.dpe) >= 11){
        return (
            <img src={dpe4} ></img>
        )
    }
    else if (parseInt(dpe.dpe) >= 7){
        return (
            <img src={dpe3} ></img>
        )
    }
    else if (parseInt(dpe.dpe) >= 6){
        return (
            <img src={dpe2} ></img>
        )
    }
    else {
        return (
            <img src={dpe1} ></img>
        )
    }
}

export default Dpe;