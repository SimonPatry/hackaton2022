import React, { useContext, useState, useEffect } from "react";
import  VignUpContext from "../../context/VignUpContext";
import {Link} from "react-router-dom";
import "./list.scss"
import {Box, Modal, Typography} from "@mui/material";
import {fetchJson} from "../../utils/fetch";

const StudentsList = () => {
    const { studentsList, studentDetailsPath, setStudentDetailsPath, selectedStudent, setSelectedStudent, modalStyle } = useContext(VignUpContext);
    const [isOpenedDetailsModal, setOpenedDetailsModal] = useState(false);

    const handleOpenDetails = (json) => {
        setSelectedStudent(json);
        setStudentDetailsPath(`/student/${json.name}`)
        setOpenedDetailsModal(true);
    }

    const handleDetails = (student) => {
        try{
            fetchJson(`http://localhost:8000/student/${student.name}`)
                .then(json => handleOpenDetails(json))
        } catch(error) {
            window.alert("Failed to fetch data from API or student doesn't exist");
        } 
    }

    const handleClose = () => {
        setOpenedDetailsModal(false);
    }

    useEffect(() => {
        setOpenedDetailsModal(false);
    }, [])

    return(
        <>
            <ul className="my-3">
                <p>nothing new right</p>
                {
                    /*studentsList && studentsList.map((item, index) => (
                        <li key={index}>
                            <a
                                onClick={() => handleDetails(item)}
                                className="btn nav-link studentName"
                            >
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </a>
                        </li>
                    ))*/
                }
            </ul>
            <Modal
                open={isOpenedDetailsModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {selectedStudent.name}
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <ul>
                            <li>
                                Date of birth : { new Date(selectedStudent.birth).toLocaleDateString() }
                            </li>
                            <li>
                                Age : { selectedStudent.age }
                            </li>
                        </ul>
                        <div className="d-flex justify-content-end">
                            <button
                                className="btn btn-primary"
                            >
                                <Link
                                    to={studentDetailsPath}
                                    className="detailsButton"
                                >
                                    Full details
                                </Link>
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default StudentsList;