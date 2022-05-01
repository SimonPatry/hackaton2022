import React from "react";
import './library.scss';
import { saveAs } from "file-saver";
import doc1 from "../../assets/ressources/interview.pdf"
import doc2 from "../../assets/ressources/VSL_champagne_032021.pdf"
import doc3 from "../../assets/ressources/VSL_conclusionSVG.pdf"
import doc4 from "../../assets/ressources/VSL_videos.docx"

const Library = () => {
    return(
        <>
            <div className="docsContainer">
            <h1 className="my-3">La Librairie des Vignes Semi Larges</h1>
                <div className="card">
                    <h3>Interview</h3>
                    <p>Vignes semi larges selon Vincent LEGRAS, téléchargez le pdf ci-dessous et retrouvez toutes les informations sur les études des VSL, une interview de Vincent LEGRAS !</p>
                    <a className="dl" href={doc1} download>Télécharger</a>
                </div>
                <div className="card">
                    <h3>Les VSL en Champagne</h3>
                    <p>Tout savoir des VSL, retrouvez toutes les informations sur les études des VSL dans cette exclusive interview de Vincent LEGRAS !</p>
                    <a className="dl" href={doc2} download>Télécharger</a>
                </div>
                <div className="card">
                    <h3>VSL - Les conclusions du SVG</h3>
                    <p>Retrouvez les analyses et les conclusions du syndicat des vignerons de la champagne dans ce document !</p>
                    <a className="dl" href={doc3} download>Télécharger</a>
                </div>
                <div className="card">
                    <h3>VSL - Nos reportages vidéos</h3>
                    <p>Retrouvez les analyses et les conclusions du syndicat des vignerons de la champagne dans ce document !</p>
                    <a className="dl" href={doc4} download>Télécharger</a>
                </div>
            </div>
            
        </>
    )
}

export default Library;