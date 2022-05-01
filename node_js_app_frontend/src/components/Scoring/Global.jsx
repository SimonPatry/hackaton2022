import React, { useContext } from 'react';

const Global= (note) => {
    console.log("global: " + parseInt(note.note));
    if (parseInt(note.note) >= 11){
        return (
            <p>Votre exploitation présente de nombreux indicateurs favorables à une transition VSL. Néanmoins des éléments méritent une analyse plus approfondie pour identifier les actions à mettre en place. </p>
        )
    }
    else if (parseInt(note.note) >= 7){
        return (
            <p>Votre exploitation semble à priori adaptée à une transition VSL. Néanmoins des éléments  méritent une analyse plus approfondie pour identifier les actions à mettre en place. Un  accompagnement personnalisé pourrait vous permettre d’optimiser votre projet</p>
        )
    }
    else if (parseInt(note.note) >= 6){
        return (
            <p>Votre exploitation possède certains atouts  pour la transition VSL. Néanmoins des éléments défavorables méritent une analyse plus approfondie pour identifier les actions à mettre en place. Un  accompagnement personnalisé pourrait vous permettre d’optimiser votre projet</p>
        )
    }
    else {
        return (
            <p>La situation est plutôt défavorable à votre transition en VSL. Il y a certainement des points que vous pouvez améliorer. Un  accompagnement personnalisé pourrait vous permettre d’analyser plus finement votre situation afin de lever des obstacles</p>
        )
    }
}

export default Global;