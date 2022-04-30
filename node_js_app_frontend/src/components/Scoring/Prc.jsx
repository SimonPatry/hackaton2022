import React, { useContext } from 'react';

const Prc = (prc) => {
    if (parseInt(prc.prc) === 1){
        return (
            <p>La taille de vos parcelles est défavorable à une transition VSL. L’implantation sera difficile, notamment si vos parcelles n’ont pas une forme régulière</p>
        )
    }
    else if (parseInt(prc.prc) === 2){
        return (
            <p>Certaines parcelles de votre exploitation semblent permettre une transition vers les VSL.</p>
        )
    }
    else if (parseInt(prc.prc) === 3){
        return (
            <p>La taille de vos parcelles permet une transition vers les VSL</p>
        )
    }
}

export default Prc;