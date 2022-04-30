import React, { useContext } from 'react';

const Rdt = (rdt) => {
    console.log(parseInt(rdt.rdt));
    if (parseInt(parseInt(rdt.rdt)) === 1){
        return (
            <p>Votre rendement moyen est à priori défavorable à une transition vers les VSL sauf cas particulier: âge des vignes, aléas climatiques, problèmes techniques (court-noué, enherbement, maladies, mode de conduite, dépérissement …). La transition vers les VSL entraine le plus souvent une diminution significative du rendement. Une analyse plus fine pourrait vous permettre de mieux estimer votre potentiel</p>
        )
    }
    else if (parseInt(rdt.rdt) === 2){
        return (
            <p>Votre rendement moyen vous permet d’envisager une  transition vers les VSL.  La transition entraine le plus souvent une diminution du rendement. Une analyse plus fine pourrait vous permettre de mieux estimer votre potentiel en fonction de divers critères complémentaires (âge des vignes, aléas climatiques, problèmes techniques (court-noué, enherbement, mode de conduite, maladies, dépérissement ….)).</p>
        )
    }
    else if (parseInt(rdt.rdt) === 3){
        return (
            <p>Votre rendement moyen vous permet d’envisager une transition vers les VSL et d’absorber  la diminution de rendement le plus souvent constatée.</p>
        )
    }
}

export default Rdt;