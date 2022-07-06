import React, { useContext, useState, useEffect } from "react";
import  VignUpContext from "../../context/VignUpContext";
import "./scoring.scss"
import {fetchJson} from "../../utils/fetch";
import {Box, Modal, Typography} from "@mui/material";
import {fetchPost} from "../../utils/fetch";
import {routes} from "../../utils/routes";
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom";

const Scoring = () => {
    
    const emptyForm = {
        rdt: 1,
        sol: 2,
        prc: 3,
        assoc: 2,
        exp: 2,
        prop: 2
    }

    const { modalStyle, Gradar, Rad, Rdt, Sol, Prc, Human, Dpe, Global} = useContext(VignUpContext);
    const [newForm, setNewForm] = useState(emptyForm);
    const [allowBtn, setAllowBtn] = useState(true);
    const [graph, setGraph] = useState(false);
    const [note, setNote] = useState(0);
    const [calc, setCalc] = useState(0);
    const [isOpenedModal, setOpenedModal] = useState(false);
    const handleChange = (e) => {
        setNewForm(() => {
            
            return ({
                    ...newForm,
                    [e.target.name]: e.target.value,
                }
            )
        });
    }

    const handleOpenedModal = () => {
        setOpenedModal(true);
    }

    const handleClose = () => {
        setOpenedModal(false);
    }


    useEffect(() => {
        setOpenedModal(false);
    }, [])

    useEffect(() => {
        setAllowBtn(false);
        setCalc(Math.trunc((parseInt(newForm.exp) + parseInt(newForm.prop) + parseInt(newForm.assoc))/3));
        setNote((calc + parseInt(newForm.rdt) + parseInt(newForm.prc) + parseInt(newForm.sol)));
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

    return(
        <>
            <h1>Auto-positionnement</h1>
            <h3>Réalisez votre premier diagnostic VSL avec <span>Vign'UP</span></h3>
            <div className="container">
                <div className="formBlock form">
                    <form>
                        <hr></hr>
                        <div>
                            <h4>Rendement moyen de l'exploitation:</h4>
                            <div>
                                <input type="radio" onChange={handleChange} id="1" name="rdt" value="1"></input>
                                <label for="rdt"> Moins de 9000 kg/hectare</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange} id="2" name="rdt" value="2"></input>
                                <label for="rdt"> Entre 9000 et 12 000 kg/hectare</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange} id="3" name="rdt" value="3"></input>
                                <label for="rdt"> Plus de 12 000 kg/hectare</label>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <h4>Type de sol dominant</h4>
                            <div>
                                <input type="radio" onChange={handleChange} id="1" name="sol" value="1"></input>
                                <label for="sol"> Superficiel</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange} id="2" name="sol" value="2"></input>
                                <label for="sol"> Moyen</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange} id="3" name="sol" value="3"></input>
                                <label for="sol"> Profond</label>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <h4>Nombre de parcelles</h4>
                            <div>
                                <input type="radio" onChange={handleChange}  name="prc" value="1"></input>
                                <label for="prc"> Moins de 33% supérieur à 20 ares</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="prc" value="2"></input>
                                <label for="prc"> Entre 33% et 66% supérieur à 20 ares</label>
                            </div>
                            <div>
                                <input type="radio" onChange={handleChange}  name="prc" value="3"></input>
                                <label for="prc"> Plus de 66% supérieur à 20 ares</label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="human">
                            <h4>Environnement humain</h4>
                            <div className="subHuman">
                                <h5>Exploitant</h5>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="exp" value="1"></input>
                                    <label for="exp"> Défavorable</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="exp" value="2"></input>
                                    <label for="exp"> Indifférent</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="exp" value="3"></input>
                                    <label for="exp"> Favorable</label>
                                </div>
                            </div>
                            <div className="subHuman">
                                <h5>Associés</h5>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="assoc" value="1"></input>
                                    <label for="assoc">Défavorable</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="assoc" value="2"></input>
                                    <label for="assoc">Indifférent</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="assoc" value="3"></input>
                                    <label for="assoc">Favorable</label>
                                </div>
                            </div>
                            <div className="subHuman">
                                <h5>Propriétaires</h5>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="prop" value="1"></input>
                                    <label for="prop"> Défavorable</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="prop" value="2"></input>
                                    <label for="prop"> Indifférent</label>
                                </div>
                                <div>
                                    <input type="radio" onChange={handleChange}  name="prop" value="3"></input>
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
                <div className="formBlock">
                    <div className="stats">
                        
                        <div>
                            < Dpe dpe={note} />
                        </div>
                        {/* <div>
                            < Gradar score={newForm} />
                        </div> */}
                        <div>
                            < Rad score={newForm} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="feedback">
                    <div>
                        <h4>Votre note globale</h4>
                        <hr></hr>
                        <h5>Conclusion</h5>
                        < Global note={note}/>
                    </div>
                    <div className="logo">
                        <img src={logo}></img>
                    </div>
                </div>
                <div className="feedback">
                    <h4>Analyse</h4>
                    <hr></hr>
                    <div >
                        <div className="feddContent">
                            <h5>Votre Rendement</h5>
                            < Rdt rdt={newForm.rdt} />
                        </div>
                        <div className="feddContent">
                            <h5>Votre Sol</h5>
                            < Sol sol={newForm.sol}/>
                        </div>
                        <div className="feddContent">
                            <h5>Vos Parcelles</h5>
                            < Prc prc={newForm.prc} />
                        </div>
                        <div className="feddContent">
                            <h5>Votre Environnement humain</h5>
                            < Human human={calc} />
                        </div>
                    </div>   
                </div>
            </div>
            <div className="next">
                <button className="btn btn-primary further" onClick={handleOpenedModal}>
                    Aller plus loin
                </button>
                <Modal
                    open={isOpenedModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <div className="login">
                            <img src={logo}></img>
                            <p>Réalisez une analyse plus poussée et entrez en contact avec nos experts !</p>
                            <input type="text" value="monexploitation@gmail.com"></input>
                            <input type="text" value="********"></input>
                        </div>
                        <div id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary modalBtn"
                                    onClick={event =>  window.location.href='/further'}
                                >
                                    s'incrire
                                </button>
                                <button
                                    className="btn btn-primary modalBtn"
                                    onClick={event =>  window.location.href='/further'}
                                >
                                    se connecter
                                </button>
                            </div>
                            <div>
                                <p className="legend"><input type="checkbox"></input>  J'accepte les conditions d'utilisation - <a href="#">Consulter les conditions utilisateur</a></p>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Scoring;