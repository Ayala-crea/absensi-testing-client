export const endpointUploadDataExcel = "http://127.0.0.1:8080/upload";
export const endpointGetAllData = "http://127.0.0.1:8080/data";

export const postBearerJSON = async (url, { body, headers }) => {
    const response = await fetch(url, {
        method: 'POST',
        body,  // Menggunakan FormData sebagai body
        headers: {
            ...headers, // Hanya tambahkan headers tambahan, jangan tetapkan Content-Type
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
};

export const getBearerJSON = async (url, { headers }) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            ...headers,
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
}