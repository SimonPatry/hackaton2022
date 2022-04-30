import React, { useContext } from "react";
import VignUpContext from "../../context/VignUpContext";

const StudentDetail = () => {

    const { selectedStudent } = useContext(VignUpContext);

    return(
        <>
            <h1 className="my-3">{selectedStudent.name}</h1>
            <h3 className="my-2">Date de naissance : {new Date(selectedStudent.birth).toLocaleDateString()}</h3>
            <h3 className="my-2">Age : {selectedStudent.age}</h3>
        </>
    )
}

export default StudentDetail;