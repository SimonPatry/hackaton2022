import { Link } from "react-router-dom";
//import Welcome from "../Welcome/Welcom";
import "./home.scss"

const Home = () => {
    return(
        <>
            <h1 className="my-3">Hackaton 2022</h1>
            <div className="vsl">
                <h2>La VSL pour les nuls</h2>
                <p>L’expérimentation "mode de conduite et enherbement", vignes semi-larges, était lancée en 2006 à la demande des professionnels, afin de proposer un outil supplémentaire au service des vignerons. Après 15 années de travaux, le Comité Champagne a rendu ses conclusions au SGV, ODG Champagne, en janvier 2021. C’est désormais l’heure des conclusions et des échanges !</p>
                <a href="/library">Renseignez vous !</a>
            </div>
            <div>
                <h2></h2>
            </div>
            <div>
                <h2></h2>
            </div>
        </>
    )
}
//<Welcome />
export default Home;