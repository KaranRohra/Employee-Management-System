import baseTemplate from "apis/baseTemplate";

export const getAllEmployeesAPI = () => {
    return baseTemplate({
        method: "GET",
    });
};

export const createEmployeeAPI = (data) => {
    return baseTemplate({
        method: "POST",
        data: data,
    });
};

export const getEmployeeByIdAPI = (employeeId) => {
    return baseTemplate({
        method: "GET",
        url: "/" + employeeId,
    });
};

export const updateEmployeeAPI = (id, employeeDetails) => {
    return baseTemplate({
        method: "PUT",
        url: "/" + id,
        data: employeeDetails,
    });
};

export const deleteEmployeeAPI = (employeeId) => {
    return baseTemplate({
        method: "DELETE",
        url: "/" + employeeId,
    });
};
