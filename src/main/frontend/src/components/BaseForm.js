import React from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BaseForm = (props) => {
    return (
        <Container
            className="mt-5"
            style={{ display: "grid", placeItems: "center" }}
        >
            {props.children[0]}
            <div style={{ width: "35%" }}>
                {props.children[2]}
                <Form onSubmit={props.handleForm}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            defaultValue={props.email}
                        />
                    </Form.Group>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Form.Group className="mb-3" style={{ width: "48%" }}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                required
                                defaultValue={props.firstName}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" style={{ width: "48%" }}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                required
                                defaultValue={props.lastName}
                            />
                        </Form.Group>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link
                            to="/"
                            style={{ width: "48%" }}
                            className="btn btn-danger"
                        >
                            Cancel
                        </Link>
                        {props.children[1]}
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default BaseForm;
