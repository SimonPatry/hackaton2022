import React, {useEffect, useState} from 'react';
import VignUpContext from "./context/VignUpContext";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Library from "./components/Library/Library";
import Further from "./components/Further/Further";
import Scoring from "./components/Scoring/Scoring";
import Gradar from "./components/Graphs/Graphs";
import Rdt from "./components/Scoring/Rdt";
import Sol from "./components/Scoring/Sol";
import Prc from "./components/Scoring/Prc";
import Human from "./components/Scoring/Human";
import Dpe from "./components/Scoring/Dpe";
import Global from "./components/Scoring/Global";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import {fetchJson} from "./utils/fetch";
import {routes} from "./utils/routes";



const App = () => {
    const [newForm, setForm] = useState('');
    const fetchDataFromBdd = () => {
        try{
            fetchJson(routes.scoring.path)
                .then(json => setForm(json));
        } catch(error) {
            window.alert("Une erreur est survenue lors de la connexion à l'API");
        }
    }
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    let providerData = {
        Library,
        Scoring,
        newForm,
        fetchDataFromBdd,
        Gradar,
        Rdt,
        Sol,
        Prc,
        Human,
        Dpe,
        Global,
        modalStyle
    }

    return (
        <VignUpContext.Provider value={providerData}>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/library" element={<Library />}/>
                        <Route path="/scoring" element={<Scoring />}/>
                        <Route path="/further" element={<Further />}/>
                    </Routes>
                </div>
            </Router>
        </VignUpContext.Provider>
    );
}

export default App;