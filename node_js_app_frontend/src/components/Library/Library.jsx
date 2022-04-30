import React, {useContext, useEffect, useState} from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import VignUpContext from "../../context/VignUpContext";
import {Box, Modal, Typography} from "@mui/material";
import {fetchDelete, fetchPost} from "../../utils/fetch";
import {routes} from "../../utils/routes";
import './library.scss';
import { saveAs } from "file-saver";


const Library = () => {

    const emptyStudent = {
        name: '',
        birth: new Date(),
        age: 0
    }

    const { studentsList, modalStyle, fetchDataFromStudents, selectedStudent, setSelectedStudent } = useContext(VignUpContext);
    const [isOpenedAddModal, setOpenedAddModal] = useState(false);
    const [isOpenedDeleteModal, setOpenedDeleteModal] = useState(false);
    const [newStudent, setNewStudent] = useState(emptyStudent);

    useEffect(() => {
        var diff = Date.now() - new Date(newStudent.birth).getTime();
        var processedAge = new Date(diff);
        setNewStudent({
            ...newStudent,
            age: Math.abs(processedAge.getUTCFullYear() - 1970)
        });
    }, [newStudent.birth]);

    const handleChange = (id, value) => {
        setNewStudent({
            ...newStudent,
            [id]: value
        });
    }

    const handleOpenedAddModal = () => {
        setOpenedAddModal(true);
    }


    const handleClose = () => {
        setOpenedAddModal(false);
    }

    const handleAddStudent = () => {
        try{
            fetchPost(routes.addNewStudent.path, newStudent)
                .then(window.alert("Student added successfully"))
                .then(fetchDataFromStudents())
                .then(handleClose());
        } catch(error) {
            window.alert("Error while posting to API");
        }
    }



    useEffect(() => {
        setOpenedAddModal(false);
    }, [])

    const saveFile = () => {
        saveAs(
          "node_js_app_frontend\src\components\Library\test.pdftest.pdf",
          "example.pdf"
        );
      };

    return(
        <>
            <h1 className="my-3">Documents</h1>
            <button class="btn btn-primary" onClick={saveFile}>download</button>
        </>
    )
}

export default Library;