import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { deleteEmployeeAPI, getAllEmployeesAPI } from "apis/employee";

const ListEmployee = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            getAllEmployeesAPI()
                .then((response) => {
                    setEmployees(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        callAPI();
    }, []);

    const deleteEmployee = (employeeId) => {
        deleteEmployeeAPI(employeeId)
            .then(() => {
                setEmployees(
                    employees.filter((employee) => employee.id != employeeId)
                );
            })
            .catch((err) => console.log(err));
    };
    return (
        <Container>
            <h2 className="text-center">Employee List </h2>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> First Name </th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, key) => (
                        <tr key={key}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email || "NA"}</td>
                            <td>
                                <Icons.Clipboard2Plus
                                    className="text-success"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        navigate(
                                            `/employee/update/${employee.id}`
                                        );
                                    }}
                                />
                            </td>
                            <td>
                                <Icons.Trash
                                    className="text-danger"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => deleteEmployee(employee.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ListEmployee;
