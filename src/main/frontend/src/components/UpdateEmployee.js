import React, { useState } from "react";
import { Button, Spinner, Alert } from "react-bootstrap";
import BaseForm from "components/BaseForm";
import { getEmployeeByIdAPI, updateEmployeeAPI } from "apis/employee";
import { useParams } from "react-router";

const UpdateEmployee = () => {
    const [employeeDetails, setEmployeeDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState({});
    const { id } = useParams();

    React.useEffect(() => {
        const callAPI = () => {
            getEmployeeByIdAPI(id)
                .then((response) => {
                    setEmployeeDetails({
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                    });
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        };
        callAPI();
    }, []);

    const handleForm = (e) => {
        e.preventDefault();
        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
        };
        updateEmployeeAPI(id, data)
            .then(() => {
                setAlert({
                    type: "success",
                    message: "Employee details updated successfully",
                });
            })
            .catch((err) => {
                console.log(err);
                setAlert({
                    type: "danger",
                    message: "Some error occurred",
                });
            });
    };

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <BaseForm
                        firstName={employeeDetails.firstName}
                        lastName={employeeDetails.lastName}
                        email={employeeDetails.email}
                        handleForm={handleForm}
                    >
                        <h2 className="text-primary">Update Employee</h2>
                        <Button
                            variant="success"
                            type="submit"
                            style={{ width: "48%" }}
                        >
                            Update
                        </Button>
                        <>
                            {alert.type && (
                                <Alert variant={alert.type}>
                                    {alert.message}
                                </Alert>
                            )}
                        </>
                    </BaseForm>
                </>
            )}
        </>
    );
};

export default UpdateEmployee;
