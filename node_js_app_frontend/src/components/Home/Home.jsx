import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import raisin from "../../assets/img/raisin.png"
import "./home.scss"

const Home = () => {
    return(
        <>
            <div className="homeContainer">
                <div className="img"><img src={logo} /></div>
                <div className="vsl">
                    <h2>Découvrir les VSL</h2>
                    <p>L’expérimentation "mode de conduite et enherbement", vignes semi-larges, était lancée en 2006 à la demande des professionnels, afin de proposer un outil supplémentaire au service des vignerons. Après 15 années de travaux, le Comité Champagne a rendu ses conclusions au SGV, ODG Champagne, en janvier 2021. C’est désormais l’heure des conclusions et des échanges !</p>
                    <div>
                        <button
                            className="btn btn-primary detailBtn"
                            onClick={event =>  window.location.href='/library'}
                        >
                            Renseignez vous !
                        </button>
                    </div>
                    <img className="raisin" src={raisin}></img>
                </div>
                <div className="scoring">
                    <h2>Réalisez votre auto-positionnement</h2>
                    <p>L’expérimentation "mode de conduite et enherbement", vignes semi-larges, était lancée en 2006 à la demande des professionnels, afin de proposer un outil supplémentaire au service des vignerons. Après 15 années de travaux, le Comité Champagne a rendu ses conclusions au SGV, ODG Champagne, en janvier 2021. C’est désormais l’heure des conclusions et des échanges !</p>
                    <div>
                        <button
                            className="btn btn-primary dialogButtons"
                            onClick={event =>  window.location.href='/scoring'}
                        >
                            Diagnostic !
                        </button>
                    </div>
                    <img className="raisin" src={raisin}></img>
                </div>
                <div className="witness">
                    <h2>Témoignages</h2>
                    <p></p>
                    <div>
                        <button
                            className="btn btn-primary dialogButtons"
                            onClick={event =>  window.location.href='/scoring'}
                        >
                            Nos partenaires
                        </button>
                    </div>
                    <img className="raisin" src={raisin}></img>
                </div>
            </div>
        </>
    )
}

export default Home;