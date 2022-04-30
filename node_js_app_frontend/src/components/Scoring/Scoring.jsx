import React, { useContext, useState, useEffect } from "react";
import  VignUpContext from "../../context/VignUpContext";
import {Link} from "react-router-dom";
import "./scoring.scss"
import {fetchJson} from "../../utils/fetch";
import {Box, Modal, Typography} from "@mui/material";
import {fetchPost} from "../../utils/fetch";
import {routes} from "../../utils/routes";

const Scoring = () => {
    
    const emptyForm = {
        rdt: 2,
        sol: 2,
        prc: 2,
        assoc: 2,
        exp: 2,
        prop: 2
    }

    const { fetchDataFromBdd, Gradar, Rdt, Sol, Prc, Human} = useContext(VignUpContext);
    const [newForm, setNewForm] = useState(emptyForm);
    const [allowBtn, setAllowBtn] = useState(true);
    const [graph, setGraph] = useState(false);
    const [note, setNote] = useState(0);
    const [calc, setCalc] = useState(0);
    const handleChange = (e) => {
        setNewForm(() => {
            
            return ({
                    ...newForm,
                    [e.target.name]: e.target.value,
                }
            )
        });
    }

    useEffect(() => {
        setAllowBtn(false);
        setCalc(Math.trunc((parseInt(newForm.exp) + parseInt(newForm.prop) + parseInt(newForm.assoc))/3));
        setNote((calc + newForm.rdt + newForm.prc + newForm.sol))
        setGraph(true);
        try{
            console.log(newForm);
            fetchPost(routes.scoring.path, newForm)
            .then(response => {
                console.log(response)
            })
        } catch(error) {
            window.alert("Error while posting to API");
        }
    }, [newForm.assoc, newForm.exp, newForm.prc, newForm.prop, newForm.rdt, newForm.sol, newForm]);

    // const handleAddForm = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
        
        
    // }

    return(
        <>
            <h1>Auto-positionnement</h1>
            <div>
                <h2>Réalisez votre premier diagnostic VSL avec <span>Vign'UP</span></h2>
                <form>
                    <hr></hr>
                    <div className="formBlock">
                        <h4>Rendement moyen de l'exploitation:</h4>
                        <div>
                            <input type="radio" onChange={handleChange} id="1" name="rdt" value="1" checked={newForm.rdt === 1}></input>
                            <label for="rdt"> Moins de 9000 kg/hectare</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleChange} id="2" name="rdt" value="2" checked={newForm.rdt === 2}></input>
                            <label for="rdt"> Entre 9000 et 12 000 kg/hectare</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleChange} id="3" name="rdt" value="3" checked={newForm.rdt === 3}></input>
                            <label for="rdt"> Plus de 12 000 kg/hectare</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="formBlock">
                        <h4>Type de sol dominant</h4>
                        <div>
                            <input type="radio" onChange={handleChange} id="1" name="sol" value="1" checked={newForm.sol === 1}></input>
                            <label for="sol"> Superficiel</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleChange} id="2" name="sol" value="2" checked={newForm.sol === 2}></input>
                            <label for="sol"> Moyen</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleChange} id="3" name="sol" value="3" checked={newForm.sol === 3}></input>
                            <label for="sol"> Profond</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="formBlock">
                        <h4>Nombre de parcelles</h4>
                        <div>
                            <input type="radio" onChange={handleChange}  name="prc" value="1" checked={newForm.prc === 1}></input>
                            <label for="prc"> Moins de 33% supérieur à 20 ares</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleChange}  name="prc" value="2" checked={newForm.prc === 2}></input>
                            <label for="prc"> Entre 33% et 66% supérieur à 20 ares</label>
                        </div>
                        <div>
                            <input type="radio" onChange={handleChange}  name="prc" value="3" checked={newForm.prc === 3}></input>
                            <label for="prc"> Plus de 66% supérieur à 20 ares</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="formBlock human">
                        <h4>Environnement humain</h4>
                        <div className="subHuman">
                            <h5>Exploitant</h5>
                            <div>
                                <input type="radio" onChange={handleChange}  name="exp" value="1" checked={newForm.exp === 1}></input>
                                <label for="exp"> Défavorable</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="exp" value="2" checked={newForm.exp === 2}></input>
                                <label for="exp"> Indifférent</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="exp" value="3" checked={newForm.exp === 3}></input>
                                <label for="exp"> Favorable</label>
                            </div>
                        </div>
                        <div className="subHuman">
                            <h5>Associés</h5>
                            <div>
                                <input type="radio" onChange={handleChange}  name="assoc" value="1" checked={newForm.assoc === 1}></input>
                                <label for="assoc">Défavorable</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="assoc" value="2" checked={newForm.assoc === 2}></input>
                                <label for="assoc">Indifférent</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="assoc" value="3" checked={newForm.assoc === 3}></input>
                                <label for="assoc">Favorable</label>
                            </div>
                        </div>
                        <div className="subHuman">
                            <h5>Propriétaire</h5>
                            <div>
                                <input type="radio" onChange={handleChange}  name="prop" value="1" checked={newForm.prop === 1}></input>
                                <label for="prop"> Défavorable</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="prop" value="2" checked={newForm.prop === 2}></input>
                                <label for="prop"> Indifférent</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="prop" value="3" checked={newForm.prop === 3}></input>
                                <label for="prop"> Favorable</label>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    {/* <button className="btn btn-primary" onClick={handleAddForm} disabled={allowBtn}>
                        Envoyer
                    </button> */}
                </form>
            </div>
            {
                graph && (
                    <>
                        <div className="stats">
                            <div className="feedback">
                                < Gradar score={newForm} />
                            </div>
                            <div className="feedback">
                                <div className="feddContent">
                                    <h4>Votre Rendement</h4>
                                    < Rdt rdt={newForm.rdt} />
                                </div>
                                <div className="feddContent">
                                <h4>Votre Sol</h4>
                                    < Sol sol={newForm.sol}/>
                                </div>
                                <div className="feddContent">
                                <h4>Vos Parcelles</h4>
                                    < Prc prc={newForm.prc} />
                                </div>
                                <div className="feddContent">
                                <h4>Vos Collaborateurs</h4>
                                    < Human human={calc} />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Scoring;