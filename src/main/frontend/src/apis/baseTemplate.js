import axios from "axios";

const baseTemplate = ({ url, method, data }) => {
    return axios({
        method: method,
        data: data,
        url: "http://localhost:8080/api/v1/employees" + (url || ""),
    });
};

export default baseTemplate;
