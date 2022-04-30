import React, { useContext } from 'react';

const Human = (human) => {
    if (parseInt(human.human) === 1){
        return (
            <p>Le contexte humain semble défavorable au projet de transition vers les VSL et une concertation entre les différentes parties semble nécessaire</p>
        )
    }
    else if (parseInt(human.human) === 2){
        return (
            <p>Le contexte humain vous permet d’envisager une  transition vers les VSL. Une concertation entre les différentes parties permettrait de sécuriser le projet</p>
        )
    }
    else if (parseInt(human.human) === 3){
        return (
            <p>Le contexte humain semble favorable au projet de transition vers les VSL</p>
        )
    }
}

export default Human;