import React, { useContext } from 'react';

const Sol = (sol) => {
    if (parseInt(sol.sol) === 1){
        return (
            <p>Le potentiel de vos sols est à priori défavorable à une transition vers les VSL qui limiteraient encore plus votre potentiel de production. Néanmoins des pistes d'adaptations sont possibles (matériel végétal...)</p>
        )
    }
    else if (parseInt(sol.sol) === 2){
        return (
            <p>Le potentiel de vos sols semble à priori favorable à une transition. Néanmoins pour faire face au risque de baisse du rendement des précautions techniques sont nécessaires. Une analyse plus fine vous permettra de mieux estimer votre potentiel.</p>
        )
    }
    else if (parseInt(sol.sol) === 3){
        return (
            <p>A l'échelle de votre exploitation le potentiel de vos sols est un atout pour votre transition aux VSL. Ponctuellement certaines parcelles pourraient être plus exposées à une baisse de rendement.</p>
        )
    }
}

export default Sol;