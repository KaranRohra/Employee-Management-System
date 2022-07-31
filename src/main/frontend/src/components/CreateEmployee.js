import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import BaseForm from "components/BaseForm";
import { createEmployeeAPI } from "apis/employee";

const CreateEmployee = () => {
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
        };

        createEmployeeAPI(data).then(()=>{
            navigate("/");
        }).catch((err)=>{
            console.log(err);
        })
    };

    return (
        <BaseForm handleForm={handleForm}>
            <h2 className="text-primary">Create Employee</h2>
            <Button variant="primary" type="submit" style={{ width: "48%" }}>
                Save
            </Button>
        </BaseForm>
    );
};

export default CreateEmployee;
