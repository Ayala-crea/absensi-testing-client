export const endpointRegister = "http://127.0.0.1:8080/register";
export const endpointLogin = "http://127.0.0.1:8080/login";
export const endpointUploadDataExcel = "http://127.0.0.1:8080/upload";
export const endpointGetAllData = "http://127.0.0.1:8080/data";

export const postJSON = async (url, { body, headers }) => {
    const response = await fetch(url, {
        method: 'POST',
        body,
        headers: {
            "Content-Type": "application/json",
            ...headers, // merge any additional headers
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
};
